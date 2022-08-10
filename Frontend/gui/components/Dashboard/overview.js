import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/overview.module.css";
import icons from "../../assets/icons/icons";

export default function Overview(props) {
  const { setView } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Overview</h1>
      <div className={styles.new__project}>
        <p className={styles.box__head}>What would you like to compare today</p>
        <button
          className={styles.project__button}
          onClick={() => setView("new task")}
        >
          Start New Project
        </button>
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
          <div className={styles.recent}>
            <div className={styles.recent__header}>
              <span className={styles.recent__header__title}>
                Recent sheets
              </span>
              <span className={styles.view__all}>View all</span>
            </div>
            <div className={styles.table}>
              <div className={styles.table__header}>
                <div className={styles.tickbox}></div>
                <label className={styles.table__name}>Task name</label>
                <div className={styles.up__down__icon}>
                  <Image layout="fill" src={icons.sort} />
                </div>
                <div className={styles.table__column}>
                  <label className={styles.column__name}>Format</label>
                  <div className={styles.up__down__icon}>
                    <Image layout="fill" src={icons.sort} />
                  </div>
                </div>
                <div className={styles.table__column}>
                  <label className={styles.column__name}>Date uploaded</label>
                  <div className={styles.up__down__icon}>
                    <Image layout="fill" src={icons.sort} />
                  </div>
                </div>
                <p className={styles.action}>Action</p>
              </div>
              <div className={styles.recent__items}>
                <div className={styles.notes__icon}>
                  <Image src={icons.notes} layout="fill" />
                </div>
                <p className={styles.notes__empty__text}>
                  Most recent sheets would appear here{" "}
                </p>
              </div>
              <div className={styles.table__base}>
                <div className={styles.more}>more</div>
                <div className={styles.entries}>
                  <div className={styles.show}>
                    Show <div className={styles.number__show}>0</div>
                  </div>
                  <div className={styles.entries__text}>entries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right__box}>
          <div className={styles.activity__monitor}>
            <div className={styles.activity__monitor__top}>
              <div className={styles.drag__box}>
                <div className={styles.drag__icon}>
                  <Image src={icons.drag} layout="fill" />
                </div>
                <div className={styles.top__text__box}>
                  <div className={styles.upper_text}>Activity Monitor</div>
                  <div className={styles.lower__text}>Report Center</div>
                </div>
              </div>
              <div className={styles.menu__icon}>
                <Image src={icons.menu} layout="fill" />
              </div>
            </div>
            <div className={styles.green__box}>
              <div className={styles.elipse__icon}>
                <Image src={icons.elipse} layout="fill" />
              </div>
              <div className={styles.green__box__text__box}>
                <div className={styles.welcome}>Welcome</div>
                <div className={styles.get__started}>Lets get started</div>
              </div>
            </div>
            <p className={styles.recent__alerts}>Recent alerts</p>
            <div className={styles.box__icon}>
              <Image src={icons.box} layout="fill" />
            </div>
            <div className={styles.no__alerts}>No alerts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
