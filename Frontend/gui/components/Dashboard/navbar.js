import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/navbar.module.css";
import icons from "../../assets/icons/icons";
import images from "../../assets/images/images";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.search__bar}>
        <input
          type="search"
          className={styles.search__input}
          placeholder="Search this workbook"
        />
        <div className={styles.search__icon}>
          <Image alt="searh" layout="fill" src={icons.search} />
        </div>
      </div>
      <div className={styles.name__card}>
        <div className={styles.profile__pic}>
          <Image alt="user" layout="fill" src={images.woman} />
        </div>
        <span className={styles.username}>Anita Agwu</span>
      </div>
    </div>
  );
}
