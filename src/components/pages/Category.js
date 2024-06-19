import styles from './Category.module.css';
import { useEffect, useState } from "react";
import { ArticleThumbnailSmall } from "../article-thumbnail/ArticleThumbnailSmall";
import { ArticleThumbnailMedium } from "../article-thumbnail/ArticleThumnailMedium";
import { ArticleLink } from "../article-thumbnail/ArticleLink";
import { VerticalBanner } from "../ads/VerticalBanner";
import { NavBar } from "../navbar/NavBar";
import { useParams } from "react-router-dom";

export function Category({articles}){

  let { category } = useParams();

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
  console.log(category);
  console.log("view width changed, new width = " + screenWidth);
  return (
    <div className={styles.container}>
      <NavBar />
      <div
        style={
          screenWidth > 700
            ? { width: "80%", marginTop: "30px" }
            : { width: "90%", marginTop: "30px" }
        }
        className={screenWidth > 700 ? styles.flex_row : styles.flex_col}
      >
        {screenWidth > 1600 ? (
          <>
            <div
              style={{ width: "25%", height: "30%" }}
              className={styles.flex_row_small}
            >
              {articles
                .filter((a) => a.id < 4)
                .map((a) => (
                  <ArticleLink article={a} key={a.id} />
                ))}
              <VerticalBanner imageUrl={"/sportad.png"} />
            </div>
          </>
        ) : null}
        <div className={screenWidth > 700 ? styles.flex_row_large : null}>
          {articles
            .filter((a) => a.category === category)
            .map((a) => (
              <ArticleThumbnailMedium article={a} key={a.id} />
            ))}
        </div>
        <div
          style={screenWidth > 700 ? { width: "30%" } : { width: "100%" }}
          className={styles.flex_row_small}
        >
          {articles.map((a) => (
            <ArticleThumbnailSmall article={a} key={a.id} />
          ))}
        </div>
      </div>
      <div
        style={
          screenWidth > 700
            ? {
                height: "0px",
                width: "80%",
                borderStyle: "solid",
                borderColor: "black",
                opacity: "0.3",
                borderWidth: "1px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }
            : {
                height: "0px",
                width: "90%",
                borderStyle: "solid",
                borderColor: "black",
                opacity: "0.3",
                borderWidth: "1px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }
        }
      ></div>
      {screenWidth > 500 ? (
        <div className={styles.flex_row} style={{ gap: "25px", width: "80%" }}>
          {articles
            .filter((a) => a.id < 3)
            .map((a) => (
              <ArticleThumbnailMedium article={a} key={a.id} />
            ))}
        </div>
      ) : (
        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          {articles
            .filter((a) => a.id < 2)
            .map((a) => (
              <ArticleThumbnailMedium article={a} key={a.id} />
            ))}
        </div>
      )}
    </div>
  );
}