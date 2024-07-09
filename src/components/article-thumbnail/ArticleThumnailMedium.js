import { useEffect, useRef, useState } from 'react';
import styles from './ArticleThumbnailMedium.module.css';

export function ArticleThumbnailMedium({article}){

  const ref = useRef();

  const [componentWidth, setComponentWidth] = useState(0);
  useEffect(() => {
    if (ref.current) {
      setComponentWidth(ref.current.offsetWidth);
    }
    const handleResize = () => {
      if (ref.current) {
        setComponentWidth(ref.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const defComponentWidth = 250;
  //360 = 21, 160 = > 21
  const defFontSize = componentWidth < 170 ? 25 : componentWidth < 360 ? 21 : 18;
  const componentWidthRatio = componentWidth / defComponentWidth;
  console.log(componentWidth);
  return (
    <div className={styles.container} ref={ref}>
      <div
        style={{ backgroundImage: `url(${article.imageUrl})` }}
        className={styles.image}
      ></div>
      <div className={styles.info_container}>
        <a href={`/article/${article.id}`}>
          <h3 style={{fontSize: `${defFontSize * componentWidthRatio}px`}} className={styles.title}>
            {article.title.length > 64
              ? article.title.substr(0, 60) + "..."
              : article.title}
          </h3>
        </a>
        <div className={styles.footer}>
          <a href={`/category/${article.category}`}>{article.category}</a>
          <p>{article.date}</p>
        </div>
      </div>
    </div>
  );
}