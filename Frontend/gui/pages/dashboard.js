import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Dashboard/dashboard.module.css";
import SideBar from "../components/Dashboard/sideBar";
import Content from "../components/Dashboard/content";
import { useState } from "react";

export default function Dashboard() {
  const [view, setView] = useState("dashboard");

  return (
    <div className={styles.container}>
      <SideBar view={view} setView={setView} />
      <Content view={view} setView={setView} />
    </div>
  );
}
