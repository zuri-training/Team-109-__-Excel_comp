import Image from "next/image";
import styles from "../../styles/Dashboard/excelTable.module.css";
import icons from "../../assets/icons/icons";

export default function ExcelTable(props) {
  const { data } = props;
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  var columns = [];
  for (var i = 0; i < data[0].length - 1; i++) {
    columns.push(letters[i]);
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__row} id={styles.table__head}>
            <th style={{ width: "40px", borderRight: "1.5px solid #d1d1d1" }}>
              <div className={styles.triangle__icon}>
                <Image src={icons.triangle} layout="fill" />
              </div>
            </th>
            {columns.map((rowData, id) => {
              return (
                <th
                  className={styles.table__cells}
                  key={id}
                  style={{ height: "2.5em" }}
                >
                  {rowData}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr className={styles.table__row} key={index}>
                {row.map((rowData, id) => {
                  return (
                    <td
                      key={id}
                      className={styles.table__cells}
                      style={{
                        textAlign: id === 0 ? "center" : "initial",
                        backgroundColor:
                          id === 0 ? "#79CEB4" : "rgba(255, 255, 255, 1e-05);",
                        padding: id === 0 ? "0" : "0px 20px 0px 7px",
                      }}
                    >
                      {id === 0 ? index + 1 : rowData}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
