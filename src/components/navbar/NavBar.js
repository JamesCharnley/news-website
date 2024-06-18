import styles from "./NavBar.module.css";
export function NavBar() {
  return (
    <div className={styles.sticky_navbar}>
      <div className={styles.tabs}>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/">
          Crime
        </a>
        </div>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/">
          Politics
        </a>
        </div>
        <div
          style={{ backgroundImage: `url("/aignews.png")` }}
          className={styles.image}
        ></div>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/">
          Business
        </a>
        </div>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/">
          Sport
        </a>
        </div>
      </div>
    </div>
  );
}
