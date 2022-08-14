import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/login.module.css";
import images from "../assets/images/images";
import icons from "../assets/icons/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [ticked, setTicked] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/auth/token/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("Token", res.data.auth_token);
        router.push("/dashboard");
      })
      .catch((e) => {
        const error = Object.keys(e.response.data);
        alert(e.response.data[error[0]]);
      });
  };

  function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }

  const handleEmail = () => {
    var valid = validateEmail(email);
    valid ? setInvalid(false) : setInvalid(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

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
            <input
              className={styles.input}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: invalid ? "red" : "rgba(22, 22, 22, 0.6)" }}
              onBlur={handleEmail}
            />

            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
              onClick={handleSubmit}
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
