import styles from "./SectionTwo.module.css";

export default function SectionTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.item1}>
          <h2>What is a CV Generator?</h2>
          <p>
            A CV (Curriculum Vitae) generator is an online tool that helps you
            create a professional CV or resume easily.
          </p>
        </div>
        <div className={styles.item2}>
          <h2>Key Features:</h2>
          <ul>
            <li>
              User-Friendly Interface: Simple design to input your information.
            </li>
            <li>
              Customizable Templates: Choose from various templates suited for
              different industries.
            </li>
            <li>
              Guided Steps: Step-by-step prompts to include essential details
              like work history and skills.
            </li>
            <li>Download Options: Save your CV as a PDF or Word document.</li>
            <li>
              Pre-written Content Suggestions: Get examples and suggestions to
              enhance your CV.
            </li>
            <li>
              Instant Updates: Edit and re-download your CV whenever needed.
            </li>
          </ul>
        </div>
        <div className={styles.item3}>
          <h2>Benefits:</h2>
          <ul>
            <li>Time-Saving: Quickly create a professional-looking CV.</li>
            <li>
              Professional Appearance: Ensures your CV meets industry standards.
            </li>
            <li>
              Accessible: Create or update your CV from any device with internet
              access.
            </li>
            <li>Customizable: Tailor your CV for specific job applications.</li>
            <li>
              Overall, a CV generator makes it easy to craft a compelling CV,
              whether you’re a student or an experienced professional.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
