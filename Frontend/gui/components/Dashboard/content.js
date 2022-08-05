import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/content.module.css";
import icons from "../../assets/icons/icons";
import Navbar from "./navbar";
import Overview from "./overview";

export default function Content() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Overview />
    </div>
  );
}
