import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/sidebar.module.css";
import icons from "../../assets/icons/icons";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SideBar(props) {
  const { view, setView } = props;
  const [expanded, setExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [action, setAction] = useState("out");
  const router = useRouter();

  const sidebar = useSpring({
    width: expanded ? "16%" : "5%",
    config: { duration: 300 },
    onRest: () => {
      if (action === "over") setShowText(true);
    },
  });

  // const expandIcon = useSpring({
  //   transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  //   config: { duration: 300 },
  // });

  const buttons = useSpring({
    config: { duration: 300 },
  });

  const animateText = useSpring({
    display: "inline-block",
  });

  const handleExpand = () => {
    if (action === "out") {
      setAction("over");
      setExpanded(true);
    } else {
      setAction("out");
      setShowText(false);
      setExpanded(false);
    }
  };

  const handleSignOut = () => {
    const token = localStorage.getItem("Token");
    console.log(token);
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    axios
      .post("http://127.0.0.1:8000/auth/token/logout/", {}, config)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("Token");
        router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        const error = Object.keys(e.response.data);
        alert(e.response.data[error[0]]);
      });
  };

  const options = [
    { icon: icons.board, text: "Dashboard" },
    { icon: icons.addProject, text: "New task" },
    { icon: icons.list, text: "Recent sheet" },
    { icon: icons.settings, text: "Settings" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <animated.div className={styles.container} style={sidebar}>
      <div className={styles.logo__box}>
        <div className={styles.logo}>
          <Image alt="logo" src={icons.logo} layout="fill" />
        </div>
        {showText && (
          <animated.span className={styles.logo__name} style={animateText}>
            CompareX
          </animated.span>
        )}
      </div>
      <div className={styles.open__box} onClick={handleExpand}>
        <div className={styles.open__icon}>
          <Image
            alt="logo"
            src={expanded ? icons.collapse : icons.expand}
            layout="fill"
          />
        </div>
        {showText && (
          <animated.span className={styles.collapse__text} style={animateText}>
            Collapse
          </animated.span>
        )}
      </div>
      <animated.div className={styles.nav__buttons} style={buttons}>
        {showText && <div className={styles.nav__title}>MENU</div>}
        {options.map((option, index) => {
          return (
            <div
              className={styles.nav__button__item}
              key={index}
              style={{
                backgroundColor:
                  view === option.text.toLowerCase()
                    ? "#9ECCA4"
                    : "transparent",
                borderLeft:
                  view === option.text.toLowerCase()
                    ? "3px solid #014430"
                    : "none",
              }}
              onClick={() => setView(option.text.toLowerCase())}
            >
              <div className={styles.icon__box}>
                <Image alt="icon" layout="fill" src={option.icon} />
              </div>
              {showText && (
                <animated.span className={styles.nav__text} style={animateText}>
                  {option.text}
                </animated.span>
              )}
            </div>
          );
        })}
        {showText && (
          <div
            className={styles.nav__title}
            style={{ marginBottom: 0, marginTop: "20px" }}
          >
            RECENT SHEETS
          </div>
        )}
      </animated.div>
      <animated.div
        className={styles.logout}
        style={buttons}
        onClick={handleSignOut}
      >
        <div className={styles.logout__icon}>
          <Image alt="logout button" src={icons.logout} layout="fill" />
        </div>
        {showText && (
          <animated.span className={styles.nav__text} style={animateText}>
            Log Out
          </animated.span>
        )}
      </animated.div>
    </animated.div>
  );
}
