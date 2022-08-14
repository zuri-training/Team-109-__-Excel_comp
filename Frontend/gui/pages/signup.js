import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/signup.module.css";
import images from "../assets/images/images";
import icons from "../assets/icons/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }

  const handleEmail = () => {
    var valid = validateEmail(email);
    valid ? setInvalid(false) : setInvalid(true);
  };

  const handleSubmit = () => {
    if (password.length >= 8) {
      axios
        .post("http://127.0.0.1:8000/auth/users/", {
          name: name,
          email: email,
          password: password,
          re_password: password,
        })
        .then((e) => {
          console.log(e);
          console.log("Succes!");
          router.push("/login");
        })
        .catch((e) => {
          console.log(e.response.data);
          console.log("Failed!");
          const error = Object.keys(e.response.data);
          console.log(error);
          alert(e.response.data[error[0]]);
        });
    } else {
      alert("Password should be at least 8 chars long");
    }
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
              onChange={(e) => setName(e.target.value)}
            />

            <label
              className={styles.label}
              style={{ color: invalid ? "red" : "rgba(22, 22, 22, 0.6)" }}
            >
              Email Address
            </label>
            <input
              className={styles.input}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: invalid ? "red" : "rgba(22, 22, 22, 0.6)" }}
              onBlur={handleEmail}
            />
            {invalid && (
              <div className={styles.email__error}>Email not valid</div>
            )}

            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
