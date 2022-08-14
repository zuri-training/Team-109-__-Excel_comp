import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/navbar.module.css";
import icons from "../../assets/icons/icons";
import images from "../../assets/images/images";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token);
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    axios
      .get("http://127.0.0.1:8000/auth/users/me/", config)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
      })
      .catch((e) => {
        const error = Object.keys(e.response.data);
        alert(e.response.data[error[0]]);
      });
  }, []);

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
          <Image alt="user" layout="fill" src={icons.profile} />
        </div>
        <span className={styles.username}>{name}</span>
      </div>
    </div>
  );
}
