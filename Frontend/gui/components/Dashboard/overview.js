import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/overview.module.css";
import icons from "../../assets/icons/icons";

export default function Overview() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Overview</h1>
      <div className={styles.new__project}>
        <p className={styles.box__head}>What would you like to compare today</p>
        <button className={styles.project__button}>Start New Project</button>
        <div className={styles.info__box}>
          <div className={styles.upload__icon}>
            <Image alt="icon" layout="fill" src={icons.upload} />
          </div>
          <span className={styles.info__box__text}>
            Drag and drop or Upload your Excel file
          </span>
        </div>
      </div>
      <div className={styles.activity__boxes}>
        <div className={styles.left__box}>
          <div className={styles.search}>
            <input
              className={styles.search__bar}
              type="text"
              placeholder="Search"
            />
            <button className={styles.sort__button}>
              <div className={styles.sort__icon}>
                <Image alt="icon" layout="fill" src={icons.order} />
              </div>
              <span className={styles.sort__text}>Sort from A-Z</span>
            </button>
          </div>
          <div className={styles.recent}>
            <div className={styles.recent__header}>
              <span className={styles.recent__header__title}>
                Recent sheets
              </span>
              <span className={styles.view__all}>View all</span>
            </div>
            {/* <table className={styles.table}></table> */}
            <div className={styles.table}>
              Nothing here yet <br />{" "}
              <button className={styles.project__button}>
                Start New Project
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right__box}>
          <button className={styles.right__box__button}>SEARCH</button>
          <div className={styles.activity__monitor}>
            <div className={styles.top__bar}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
