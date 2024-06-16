import styles from './ArticleLink.module.css';

export function ArticleLink({article}){
  return (
    <div className={styles.container}>
      <a href='/'>{article.category}</a>
      <a href={`/article/${article.id}`}>
        <h2 className={styles.title}>{article.title}</h2>
      </a>
    </div>
  );
}