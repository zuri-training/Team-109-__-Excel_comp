import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";
import Section from "../components/Home/section";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Section />
    </div>
  );
}
