import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Create a Professional CV in Minutes</h1>
        <h3>
          Stand out from the crowd with a sleek, personalized CV. Our CV <br />
          generator helps you craft a standout resume quickly and effortlessly,
          <br />
          no design or technical skills required!
        </h3>
      </div>
      <button>Let's start now</button>
    </div>
  );
}
