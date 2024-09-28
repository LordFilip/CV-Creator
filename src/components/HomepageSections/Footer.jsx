import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#tips">Tips</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSocial}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className={styles.footerCopyright}>
          <p>© 2024 CV Creator. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
