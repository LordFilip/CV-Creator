import { Link } from "react-router-dom";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Create a Professional CV in Minutes</h1>
        <h3>
          Stand out from the crowd with a sleek, personalized CV,
          <br /> no design or technical skills required!
        </h3>
      </div>
      <Link className={styles.sectionOneLink} to={"/create"}>
        {`Let's start now`}
      </Link>
    </div>
  );
}
