import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home/header.module.css";
import images from "../../assets/images/images";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <h2 className={styles.logo}>CompareX</h2>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <a href="#work">How it works?</a>
            </li>
            <li className={styles.list__item}>
              <a href="#client">Our Clients</a>
            </li>
            <li className={styles.list__item}>
              <a href="#compare">Reviews</a>
            </li>
          </ul>
        </div>
        <span>
          <a href="#" className={styles.btn_1}>
            Sign In
          </a>
          <a href="#" className={styles.btn_2}>
            Sign Up for free
          </a>
        </span>
      </nav>

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
            Save your time and build and build productivity with the world-best
            performing excel
            <br />
            comparison tool
          </p>
          <span className={styles.use}>
            <a href="#" className={styles.btn_3}>
              Use for free
            </a>
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
        <video
          className={styles.video}
          width="700"
          height="400"
          id="view"
          controls
          muted
        >
          <source src="Images/DEMO VIDEO.svg" type="video/mp4" />
          <source
            src="Images/DEMO VIDEO.svg"
            type="video/ogg"
            alt="Demo Video"
          />
        </video>
      </main>
    </header>
  );
}
