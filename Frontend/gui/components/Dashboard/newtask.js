import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dashboard/newtask.module.css";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import Dropzone from "react-dropzone";

export default function NewTask() {
  const [options, setOptions] = useState([false, false, false, false]);
  const [file, setFile] = useState(false);
  const [file2, setFile2] = useState(false);

  const handleCheckBoxClick = (index) => {
    var temp = [...options];
    temp[index] = !temp[index];
    setOptions(temp);
  };

  const handleUpload = (files) => {
    if (file) {
      let file = files[0];
      setFile2(file);
    } else {
      let file = files[0];
      setFile(file);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.top__section}>
        <div className={styles.new}>
          <div className={styles.folder}>
            <Image src={icons.folder} layout="fill" />
          </div>
          <h1 className={styles.task}>New Task</h1>
        </div>
        <div className={styles.proj}>
          <h4 className={styles.project}>Project's Name</h4>
          <input type="text" className={styles.clinic} />
        </div>
      </div>
      <div className={styles.upload}>
        <h2 className={styles.excel}>Excel sheets upload</h2>
        <div className={styles.info}>
          <Image src={icons.ensure} layout="fill" />
        </div>
      </div>
      <Dropzone onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div className={styles.up} {...getRootProps()}>
            {!file && (
              <div className={styles.upload__icon}>
                <Image src={icons.cloudUpload} layout="fill" />
              </div>
            )}
            {file ? (
              <div className={styles.files}>
                <div className={styles.file__icon}>
                  <Image src={icons.folder} layout="fill" />
                </div>
                {file2 && (
                  <div
                    className={styles.file__icon}
                    style={{ marginLeft: "20px" }}
                  >
                    <Image src={icons.folder} layout="fill" />
                  </div>
                )}
              </div>
            ) : (
              <p className={styles.drag}>
                Drag and drop or Upload all your Excel files here
              </p>
            )}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      <h3 className={styles.like}>What would you like to do? </h3>

      <div className={styles.check}>
        <div className={styles.option} onClick={() => handleCheckBoxClick(0)}>
          {options[0] ? (
            <div className={styles.check__icon}>
              <Image src={icons.check} layout="fill" />
            </div>
          ) : (
            <div className={styles.terms}></div>
          )}
          <label htmlFor="compare rows" className={styles.terms__label}>
            Highlight differences
          </label>
        </div>

        <div className={styles.option} onClick={() => handleCheckBoxClick(1)}>
          {options[1] ? (
            <div className={styles.check__icon}>
              <Image src={icons.check} layout="fill" />
            </div>
          ) : (
            <div className={styles.terms}></div>
          )}
          <label htmlFor="convert" className={styles.terms__label}>
            Highlight duplicates
          </label>
        </div>

        <div className={styles.option} onClick={() => handleCheckBoxClick(2)}>
          {options[2] ? (
            <div className={styles.check__icon}>
              <Image src={icons.check} layout="fill" />
            </div>
          ) : (
            <div className={styles.terms}></div>
          )}
          <label htmlFor="compare_andmerge" className={styles.terms__label}>
            Compare and merge
          </label>
        </div>

        <div className={styles.option} onClick={() => handleCheckBoxClick(3)}>
          {options[3] ? (
            <div className={styles.check__icon}>
              <Image src={icons.check} layout="fill" />
            </div>
          ) : (
            <div className={styles.terms}></div>
          )}
          <label htmlFor="compare all" className={styles.terms__label}>
            Compare All
          </label>
        </div>
      </div>
      <button className={styles.btn}>Compare Files</button>
    </section>
  );
}
