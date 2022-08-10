import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/navbar.module.css";
import icons from "../../assets/icons/icons";
import images from "../../assets/images/images";

export default function newtask() {
  return (
<section className={sec}>
<div className={new}>
  <img src="folder.svg" />
  <h1 className={task}>New Task</h1>
</div>
<div className={proj}>
<h4 className={project}>Project's Name</h4>
<form>
<input type="text" name="clinical" value="Clinical" className={clinic} />
</form>
</div>
<div className={upload}>
  <h2 className={excel}>Excel sheets upload</h2>
  <img src="Frame 77.svg" className={=info}/>
</div>
<div className={="upper">
<div className={="up">
<img src="carbon_cloud-upload.svg" />
<a href="#">
  <p className={drag}>Drag and drop or Upload all your Excel files here</p>
</a>
</div>
</div>
<div className={do}>
<h3 className={like} >What would you like to do? </h3>
<form className={check}>
<input type="checkbox" />Highlight Differences
<input type="checkbox" />Highlight Duplicates
<input type="checkbox" />Compare and merge
<input type="checkbox" />Compare all
</form>
</div>
<span className={btn}>
<button className={btn}>Compare Files</button>
</span>
</section>
</body>
</html>
);
}
