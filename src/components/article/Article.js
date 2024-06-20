import { useParams } from "react-router-dom";
import styles from './Article.module.css';
import { ArticleThumbnailSmall } from "../article-thumbnail/ArticleThumbnailSmall";
import { VerticalBanner } from "../ads/VerticalBanner";
import { NavBar } from "../navbar/NavBar";
import { useEffect, useState } from "react";


export function Article({articles}) {

  let { id } = useParams();
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
  console.log(id);
  const article = articles.find((a) => a.id === Number(id));
  if(!article)
  {
    return <div></div>
  }
  console.log(Date.now());
  const date = new Date(article.time).toDateString();
  return (
    <div className={styles.container}>
      <NavBar />
      <div
        className={
          screenWidth > 700
            ? styles.flex_container
            : styles.flex_container && styles.flex_row
        }
      >
        {screenWidth > 1600 && (
          <div className={styles.flex_row_side}>
            <VerticalBanner imageUrl={"/sportad.png"} />
          </div>
        )}
        <div
          style={screenWidth > 700 ? { width: "50%" } : { width: "90%" }}
          className={styles.article}
        >
          <article>
            <h1
              style={
                screenWidth > 700 ? { fontSize: "32px" } : { fontSize: "28px" }
              }
            >
              {article.title}
            </h1>
            <span>
              <p
                style={
                  screenWidth > 700
                    ? { fontSize: "18px" }
                    : { fontSize: "14px" }
                }
              >
                Author: {article.author}
              </p>
              <p
                style={
                  screenWidth > 700
                    ? { fontSize: "18px" }
                    : { fontSize: "14px" }
                }
              >
                Published: {date}
              </p>
            </span>
            <div
              style={{ backgroundImage: `url(${article.imageUrl})` }}
              className={styles.image}
            ></div>
            <p dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        </div>
        <div style={screenWidth > 700 ? {width: "24%"} : {width: "90%"}} className={styles.flex_row_side}>
          {articles.map((a) => (
            <ArticleThumbnailSmall article={a} key={a.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
