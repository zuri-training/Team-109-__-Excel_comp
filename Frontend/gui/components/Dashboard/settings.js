import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/settings.module.css";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import Dropzone from "react-dropzone";

export default function Settings() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Account</h2>
      <div className={styles.form}>
        <div className={styles.inner}>
          <div className={styles.image__box}>
            <div className={styles.pic}>
              <Image layout="fill" src={icons.profile} />
            </div>
            <label htmlFor="upload" className={styles.upload__button}>
              Upload
            </label>
            <input id="upload" type="file" style={{ display: "none" }} />
            <button className={styles.remove__button}>Remove</button>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="email" />

            <label className={styles.label}>Email Address</label>
            <input className={styles.input} type="email" />

            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" />
          </div>
          <button className={styles.save__button}>Save Changes</button>
        </div>
      </div>
    </section>
  );
}
