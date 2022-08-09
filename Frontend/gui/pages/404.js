import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";
import images from "../assets/images/images";

export default function FourOhFour() {
  return (
    <div className={styles.general}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>CompareX</h1>

        <div className={styles.list}>
          <Link href={"/"}>
            <span className={styles.link}>How it works?</span>
          </Link>
          <Link href={"/"}>
            <span className={styles.link}>Our Clients</span>
          </Link>
          <Link href={"/"}>
            <span className={styles.link}>Reviews</span>
          </Link>
        </div>

        <button className={styles.btn_1}>Sign In</button>
        <button className={styles.btn_2}>Sign Up for free</button>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.page}>Page not found</h1>
        <p className={styles.could}>
          Something happened and we could not find the page you're <br />
          looking for. Browse other options in the menu above or
          <br />
          return to Homepage.
        </p>
      </main>
      <div className={styles.sign}>
        <button className={styles.btn_3}>Return to homepage</button>
      </div>
    </div>
  );
}
