import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/login.module.css";
import images from "../assets/images/images";
import icons from "../assets/icons/icons";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [ticked, setTicked] = useState(false);

  const handleClick = () => {
    axios.get("http://127.0.0.1:8000/auth/users").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <Image src={icons.signupLogo} layout="fill" />
        </div>
        <h5 className={styles.h5} onClick={() => console.log("Clicked")}>
          Don’t have an account? <Link href={"/signup"}>Sign Up for Free!</Link>
        </h5>
      </nav>

      <div className={styles.form__container}>
        <div className={styles.parent_container}>
          <form className={styles.form}>
            <h2>
              <strong>Welcome back!</strong>
            </h2>
            <p>Welcome back, please enter your details.</p>

            <div className={styles.google}>
              <Image alt="google" src={icons.google} />
              <span style={{ marginLeft: "10px" }}>
                <strong>Log In with Google</strong>
              </span>
            </div>
            <div className={styles.frame}>
              <Image src={images.or} alt="frame" />
            </div>

            <label className={styles.label}>Email Address</label>
            <input className={styles.input} type="email" required />

            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" required />
            <div className={styles.remember__me}>
              <div className={styles.option}>
                {ticked ? (
                  <div
                    className={styles.check__icon}
                    onClick={() => setTicked(false)}
                  >
                    <Image src={icons.check} layout="fill" />
                  </div>
                ) : (
                  <div
                    className={styles.terms}
                    onClick={() => setTicked(true)}
                  ></div>
                )}
                <label className={styles.terms__label}>Remember me</label>
              </div>
              <span className={styles.forgot__password}>Forgot password?</span>
            </div>
            <input
              type="button"
              value="Get Started"
              className={styles.button}
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
      <div className={styles.dashboard__background}>
        <div className={styles.dashboard__svg}>
          <Image src={images.dashboard} alt="dashboard" layout="fill" />
        </div>
      </div>
    </div>
  );
}
