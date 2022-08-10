import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/content.module.css";
import icons from "../../assets/icons/icons";
import Navbar from "./navbar";
import Overview from "./overview";
import NewTask from "./newtask";
import { useState } from "react";

export default function Content() {
  const [view, setView] = useState("overview");

  return (
    <div className={styles.container}>
      <Navbar />
      {view === "overview" && <Overview setView={setView} />}
      {view === "new task" && <NewTask />}
    </div>
  );
}
