import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home/section.module.css";
import images from "../../assets/images/images";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import Link from "next/link";
import Dropzone from "react-dropzone";

export default function Section() {
  const [modal, setModal] = useState(false);
  const [options, setOptions] = useState([false, false, false, false]);

  const handleCheckBoxClick = (index) => {
    var temp = [...options];
    temp[index] = !temp[index];
    setOptions(temp);
  };

  return (
    <section className={styles.section}>
      <div className={styles.used_by} id="client">
        <Image src={images.lovedBy} alt="loved by" />
      </div>
      <div className={styles.icons}>
        <Image src={images.company} alt="Client Companies" />
      </div>

      <h2 className={styles.how} id="work">
        How does
        <span className={styles.how_1}>
          {"  "} CompareX{"  "}{" "}
        </span>
        work?
      </h2>
      <span>
        <p className={styles.steps}>
          Compare the differences between the Two(2) Excel <br />
          spreedsheets in 3 EASY STEPS
        </p>
      </span>
      <div className={styles.frame}>
        <Image alt="frames" src={images.frame2} layout="fill" />
      </div>

      <div className={styles.compare__box}>
        <div className={styles.compare}>
          <h4>
            Compare <span>now!</span>
          </h4>
        </div>
        <div className={styles.main_upload}>
          <Dropzone onDrop={(acceptedFiles) => setModal(true)}>
            {({ getRootProps, getInputProps }) => (
              <div className={styles.upload} {...getRootProps()}>
                <div className={styles.upload_one}>
                  <div className={styles.drag_image}>
                    <Image src={images.drag} />
                  </div>
                  <div className={styles.drag_upload}>
                    Click or drag and drop to upload your file here
                  </div>
                </div>
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          <Dropzone onDrop={(acceptedFiles) => setModal(true)}>
            {({ getRootProps, getInputProps }) => (
              <div className={styles.upload} {...getRootProps()}>
                <div className={styles.upload_one}>
                  <div className={styles.drag_image}>
                    <Image src={images.drag} />
                  </div>
                  <div className={styles.drag_upload}>
                    Click or drag and drop to upload your file here
                  </div>
                </div>
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>

          {modal && (
            <div className={styles.error__modal}>
              <div className={styles.modal}>
                <div
                  className={styles.close__button}
                  onClick={() => setModal(false)}
                >
                  <Image src={icons.cancel} />
                </div>
                <h2 className={styles.modal__head}>Oops!</h2>
                <p className={styles.modal__info}>
                  Tool is only available to Registered Users. Quickly sign up
                  with your Email Address to compare your Excel Files for free!
                </p>
                <Link href={"/signup"}>
                  <button className={styles.modal__button}>
                    Sign Up for free
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

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
              Compare rows for duplicate
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
              Convert CSV files to XSLX and vice-versa
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

        <button className={styles.btn} onClick={() => setModal(true)}>
          Compare files
        </button>
      </div>

      <div className={styles.everyone__convinced}>
        <div className={styles.people}>
          <Image src={images.followers} />
        </div>

        <h3 className={styles.convinced}>
          Everyone <span style={{ color: "#161616" }}>else is convinced</span>
        </h3>

        <div className={styles.reviews} id="compare">
          <div className={styles.review}>
            <div className={styles.review__box}>
              <p>
                <strong>
                  "compareX is a great tool to compare your excel sheets and
                  explore the differences in a single location. Works
                  seamlessly."
                </strong>
              </p>
              <div className={styles.reviewer}>
                <Image alt="person" src={images.michael} />
                <span className={styles.reviewer_name}>
                  <strong>Michael</strong>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.review__box}>
              <p>
                <strong>
                  "compareX is a great tool to compare your excel sheets and
                  explore the differences in a single location. Works
                  seamlessly."
                </strong>
              </p>
              <div className={styles.reviewer}>
                <Image alt="person" src={images.atinuke} />
                <span className={styles.reviewer_name}>
                  <strong>Atinuke</strong>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.review__box}>
              <p>
                <strong>
                  "compareX is a great tool to compare your excel sheets and
                  explore the differences in a single location. Works
                  seamlessly."
                </strong>
              </p>
              <div className={styles.reviewer}>
                <Image alt="person" src={images.damilare} />
                <span className={styles.reviewer_name}>
                  <strong>Damilare</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.FAQ}>
        <h4 className={styles.FAQ__header}>
          Frequently Asked <span style={{ color: "#015239" }}>Questions.</span>
        </h4>
        <div className={styles.questions}>
          <div className={styles.question} style={{ marginBottom: "32px" }}>
            <div className={styles.question__inner}>
              <h4>Is CompareX Free?</h4>
              <p>Absolutely free</p>
            </div>
          </div>

          <div className={styles.question}>
            <div className={styles.question__inner}>
              <h4>What file formats are supported?</h4>
              <p>CSV and Excel only!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
