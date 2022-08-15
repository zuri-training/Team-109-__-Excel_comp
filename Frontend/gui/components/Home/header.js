import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home/header.module.css";
import images from "../../assets/images/images";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import icons from "../../assets/icons/icons";

export default function Header() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <div className={styles.logo__name}>
            <div className={styles.logo__icon}>
              <Image src={icons.logo} layout="fill" />
            </div>
            <h2 className={styles.logo}>CompareX</h2>
          </div>
          <ul className={styles.list}>
            <a className={styles.list__item} href="#work">
              How it works?
            </a>

            <a className={styles.list__item} href="#client">
              Our Clients
            </a>

            <a className={styles.list__item} href="#compare">
              Reviews
            </a>
          </ul>
        </div>
        <span>
          <Link href={"/login"}>
            <span className={styles.btn_1}>Sign In</span>
          </Link>
          <Link href={"/signup"}>
            <span className={styles.btn_2}>Sign Up for free</span>
          </Link>
        </span>
      </nav>

      <div className={styles.main__container}>
        <main className={styles.main}>
          <div className={styles.content}>
            <h4 className={styles.tool}>
              <span className={styles.crown}>
                <Image src={images.crown} />
              </span>{" "}
              NEW TOOL
            </h4>
            <h1 className={styles.easier}>
              Comparing Excel Sheets
              <br />
              Just Got Easier!
            </h1>
            <p className={styles.save}>
              Save your time and build and build productivity with the
              world-best performing excel
              <br />
              file comparison tool
            </p>
            <span className={styles.use}>
              <Link href={"/signup"}>
                <span className={styles.btn_3}>Use for free</span>
              </Link>
              <div className={styles.watch__demo}>
                <a href="#view" className={styles.btn_4}>
                  Watch Demo
                </a>
                <div className={styles.arrow}>
                  <Image src={images.vector} />
                </div>
              </div>
            </span>
          </div>
          {/* End of Background */}
          {/* Video */}
          {hydrated && (
            <ReactPlayer
              className={styles.video}
              width="70%"
              height="400px"
              id="view"
              url="https://www.youtube.com/watch?v=Y-Z21liJ1-U"
              controls
            />
          )}
        </main>
      </div>
    </header>
  );
}
