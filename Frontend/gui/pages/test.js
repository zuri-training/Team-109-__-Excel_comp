import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Dashboard/excelTable.module.css";
import * as XLSX from "xlsx";
import ExcelTable from "../components/Dashboard/excelTable";

import { useState } from "react";

export default function Test() {
  const [data, setData] = useState([]);
  const [view, setView] = useState("button");

  const handleFileUpload = async (event) => {
    let file = event.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    var wsNames = workbook.SheetNames;
    const sheet = workbook.Sheets[wsNames[0]];
    var rowData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    setData(rowData);
    setView("table");
  };

  return (
    <div className={styles.container}>
      {view === "button" && (
        <>
          <label htmlFor="upload" className={styles.button}>
            upload
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            id="upload"
            onChange={handleFileUpload}
          />
        </>
      )}
      {view === "table" && (
        <div style={{ width: "60%", height: "70%" }}>
          <ExcelTable data={data} />
        </div>
      )}
    </div>
  );
}
