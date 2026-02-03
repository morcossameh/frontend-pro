import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#">About</a>
          <a href="#">Accessibility</a>
          <a href="#">Help Center</a>
          <a href="#">
            Privacy & Terms <span className="fas fa-caret-down"></span>
          </a>
          <a href="#">Ad Choices</a>
          <a href="#">Advertising</a>
          <a href="#">
            Business Services <span className="fas fa-caret-down"></span>
          </a>
          <a href="#">Get the LinkedIn app</a>
          <a href="#">More</a>
        </div>
        <div className={styles.footerCopyright}>
          <span>
            <strong>LinkedIn</strong> LinkedIn Corporation © 2025
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
