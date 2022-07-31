import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.main_footer}>
          <div className={styles.team}>
            <h2 className={styles.footer_logo}>
              <strong>CompareX</strong>
            </h2>
            <div className={styles.list}>
              <a className={styles.list__item} href="#work">
                How it works?
              </a>

              <a className={styles.list__item} href="#client">
                Our Clients
              </a>

              <a className={styles.list__item} href="#compare">
                Reviews
              </a>

              <a className={styles.list__item} href="#view">
                Watch Demo
              </a>
            </div>
          </div>
          <div className={styles.footer_project}>
            <p>A project by Team 109</p>
          </div>
        </div>

        <div className={styles.copy}>
          <div className={styles.copyright}>
            <i className='fa fa-copyright" aria-hidden="true"'>
              compareX 2022. Intellectual property of Zuri X 14G.
            </i>
          </div>

          <div className={styles.condition}>
            <p>Terms and Conditions</p>
            <p style={{ marginLeft: "26px" }}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
