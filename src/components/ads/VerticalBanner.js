import styles from './VerticalBanner.module.css';

export function VerticalBanner({imageUrl}){
  return <img className={styles.banner_ad} src={imageUrl} alt="ad"></img>;
}