import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/sidebar.module.css";
import icons from "../../assets/icons/icons";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [expanded, setExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [action, setAction] = useState("");

  const sidebar = useSpring({
    width: expanded ? "16%" : "5%",
    config: { duration: 1000 },
    onRest: () => {
      if (action === "over") setShowText(true);
    },
  });

  const buttons = useSpring({
    width: expanded ? "78%" : "82%",
    config: { duration: 1000 },
  });

  const animateText = useSpring({
    display: "inline-block",
  });

  const handleMouseOver = () => {};

  const handleMouseAway = () => {};

  return (
    <animated.div
      className={styles.container}
      style={sidebar}
      onMouseOver={() => {
        setAction("over");
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setAction("out");
        setShowText(false);
        setExpanded(false);
      }}
    >
      <div className={styles.logo}>
        <Image alt="logo" src={icons.logo} layout="fill" />
      </div>
      <animated.div className={styles.nav__buttons} style={buttons}>
        <div className={styles.nav__button__item}>
          <div className={styles.icon__box}>
            <Image alt="icon" layout="fill" src={icons.board} />
          </div>
          {showText && (
            <animated.span className={styles.nav__text} style={animateText}>
              Dashboard
            </animated.span>
          )}
        </div>
        <div className={styles.nav__button__item}>
          <div className={styles.icon__box}>
            <Image alt="icon" layout="fill" src={icons.addProject} />
          </div>
          {showText && (
            <animated.span className={styles.nav__text} style={animateText}>
              New task
            </animated.span>
          )}
        </div>
        <div className={styles.nav__button__item}>
          <div className={styles.icon__box}>
            <Image alt="icon" layout="fill" src={icons.list} />
          </div>
          {showText && (
            <animated.span className={styles.nav__text} style={animateText}>
              Recent sheet
            </animated.span>
          )}
        </div>
        <div className={styles.nav__button__item}>
          <div className={styles.icon__box}>
            <Image alt="icon" layout="fill" src={icons.boxes} />
          </div>
          {showText && (
            <animated.span className={styles.nav__text} style={animateText}>
              Convert
            </animated.span>
          )}
        </div>
        <div className={styles.nav__button__item}>
          <div className={styles.icon__box}>
            <Image alt="icon" layout="fill" src={icons.settings} />
          </div>
          {showText && (
            <animated.span className={styles.nav__text} style={animateText}>
              Settings
            </animated.span>
          )}
        </div>
      </animated.div>
      <animated.div className={styles.logout} style={buttons}>
        <div className={styles.logout__icon}>
          <Image alt="logout button" src={icons.logout} layout="fill" />
        </div>
        {showText && (
          <animated.span className={styles.nav__text} style={animateText}>
            sign out
          </animated.span>
        )}
      </animated.div>
    </animated.div>
  );
}
