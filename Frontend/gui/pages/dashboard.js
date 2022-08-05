import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Dashboard/dashboard.module.css";
import SideBar from "../components/Dashboard/sideBar";
import Content from "../components/Dashboard/content";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Content />
    </div>
  );
}
