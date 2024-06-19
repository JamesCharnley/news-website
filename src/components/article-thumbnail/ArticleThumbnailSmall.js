import styles from './ArticleThumbnailSmall.module.css';


export function ArticleThumbnailSmall({article}){
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${article.imageUrl})` }}
        className={styles.image}
      ></div>
      <div className={styles.info_container}>
        <a href={`/article/${article.id}`}>
        <h2 className={styles.title}>
          {article.title.length > 64 ? article.title.substr(0, 60) + "..." : article.title}
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