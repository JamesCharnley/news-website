import { useEffect, useRef, useState } from 'react';
import styles from './ArticleThumbnailSmall.module.css';


export function ArticleThumbnailSmall({article}){

  const ref = useRef();

  const [componentWidth, setComponentWidth] = useState(0);
  useEffect(() => {
    if(ref.current){
      setComponentWidth(ref.current.offsetWidth);
    }
    const handleResize = () => {
      if(ref.current){
        setComponentWidth(ref.current.offsetWidth);
      }
      
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const defComponentWidth = 360;
  const defFontSize = 22;
  const componentWidthRatio = componentWidth / defComponentWidth;

  return (
    <div className={styles.container} ref={ref}>
      <div
        style={{ backgroundImage: `url(${article.imageUrl})` }}
        className={styles.image}
      ></div>
      <div className={styles.info_container}>
        <a href={`/article/${article.id}`}>
          <h2 style={{fontSize: `${defFontSize * componentWidthRatio}px`}} className={styles.title}>
            {article.title.length > 64
              ? article.title.substr(0, 60) + "..."
              : article.title}
          </h2>
        </a>
        <div className={styles.footer}>
          <a href={`/category/${article.category}`}>{article.category}</a>
          <p>{article.date}</p>
        </div>
      </div>
    </div>
  );
}