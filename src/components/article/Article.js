import { useParams } from "react-router-dom";
import styles from './Article.module.css';
import { ArticleThumbnailSmall } from "../article-thumbnail/ArticleThumbnailSmall";
import { VerticalBanner } from "../ads/VerticalBanner";
import { NavBar } from "../navbar/NavBar";


export function Article({articles}) {

  let { id } = useParams();
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
      <div className={styles.flex_container}>
        <div className={styles.flex_row_side}>
          <VerticalBanner imageUrl={"/sportad.png"} />
        </div>
        <div className={styles.article}>
          <article>
            <h1>{article.title}</h1>
            <span>
              <p>Author: {article.author}</p>
              <p>Published: {date}</p>
            </span>
            <div
              style={{ backgroundImage: `url(${article.imageUrl})` }}
              className={styles.image}
            ></div>
            <p dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        </div>
        <div className={styles.flex_row_side}>
          {articles.map((a) => <ArticleThumbnailSmall article={a} key={a.id} />)}
        </div>
      </div>
    </div>
  );
}
