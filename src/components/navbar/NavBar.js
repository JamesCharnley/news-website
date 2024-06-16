import styles from "./NavBar.module.css";
export function NavBar() {
  return (
    <div className={styles.sticky_navbar}>
      <div className={styles.tabs}>
        <a className={styles.nav_content} href="/">
          Home
        </a>
        <a
          className={styles.nav_content}
          href="https://github.com/JamesCharnley"
        >
          GitHub
        </a>
        <div
          style={{ backgroundImage: `url("/aignews.png")` }}
          className={styles.image}
        ></div>
        <a
          className={styles.nav_content}
          href="https://www.linkedin.com/in/james-charnley-nz"
        >
          LinkedIn
        </a>
        <a className={styles.nav_content} href="https://jamescharnley.itch.io/">
          Itch.io
        </a>
      </div>
    </div>
  );
}
