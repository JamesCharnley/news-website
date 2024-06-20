import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
export function NavBar() {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
            style={
              screenWidth > 700
                ? { backgroundImage: `url("/aignews.png")`, width: "220px" }
                : { backgroundImage: `url("/aignews.png")`, width: "150px" }
            }
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
