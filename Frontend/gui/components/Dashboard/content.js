import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/content.module.css";
import icons from "../../assets/icons/icons";
import Navbar from "./navbar";
import Overview from "./overview";
import NewTask from "./newtask";
import Settings from "./settings";

export default function Content(props) {
  const { view, setView } = props;

  return (
    <div className={styles.container}>
      <Navbar />
      {view === "dashboard" && <Overview setView={setView} />}
      {view === "new task" && <NewTask />}
      {view === "settings" && <Settings />}
    </div>
  );
}
