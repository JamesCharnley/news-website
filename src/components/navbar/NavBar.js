import styles from "./NavBar.module.css";
export function NavBar() {
  return (
    <div className={styles.sticky_navbar}>
      <div className={styles.tabs}>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/category/Crime">
            Crime
          </a>
        </div>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/category/Politics">
            Politics
          </a>
        </div>
        <a href="/">
          <div
            style={{ backgroundImage: `url("/aignews.png")` }}
            className={styles.image}
          ></div>
        </a>

        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/category/Business">
            Business
          </a>
        </div>
        <div className={styles.tab_container}>
          <a className={styles.nav_content} href="/category/Sports">
            Sport
          </a>
        </div>
      </div>
    </div>
  );
}
