import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home/section.module.css";
import images from "../../assets/images/images";

export default function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.used_by} id="client">
        <Image src={images.lovedBy} alt="loved by" />
      </div>
      <div className={styles.icons}>
        <Image src={images.company} alt="Client Companies" />
      </div>

      <h2 className={styles.how} id="work">
        How does
        <span className={styles.how_1}>
          {"  "} CompareX{"  "}{" "}
        </span>
        work?
      </h2>
      <span>
        <p className={styles.steps}>
          Compare the differences between the Two(2) Excel <br />
          spreedsheets in 3 EASY STEPS
        </p>
      </span>
      <div className={styles.frame}>
        <Image alt="frames" src={images.frame2} />
      </div>
    </section>
  );
}
