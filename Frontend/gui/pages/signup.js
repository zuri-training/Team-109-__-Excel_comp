import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/signup.module.css";
import images from "../assets/images/images";
import icons from "../assets/icons/icons";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <Image src={icons.signupLogo} layout="fill" />
        </div>
        <h5 className={styles.h5} onClick={() => console.log("Clicked")}>
          Already have an account? <Link href={"/login"}>Log In</Link>
        </h5>
      </nav>

      <div className={styles.form__container}>
        <div className={styles.parent_container}>
          <form className={styles.form}>
            <h2>
              <strong>Create an account</strong>
            </h2>
            <p>
              Sign up with your email address to compare your excel files for
              free.
            </p>

            <div className={styles.google}>
              <Image alt="google" src={icons.google} />
              <span style={{ marginLeft: "10px" }}>
                <strong>Sign up with Google.</strong>
              </span>
            </div>
            <div className={styles.frame}>
              <Image src={images.or} alt="frame" />
            </div>
            <label className={styles.label}>Full Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder=""
              required
            />

            <label className={styles.label}>Email Address</label>
            <input className={styles.input} type="email" required />

            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" required />
            <input
              type="button"
              value="Get Started"
              className={styles.button}
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
