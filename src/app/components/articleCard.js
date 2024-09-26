import Link from "next/link";
import styles from "../page.module.css";
import { formatDateForArticle } from "./utils";
export default function ArticleCard({
  id,
  title,
  publishedDate,
  blurb,
  image,
}) {
  return (
    <div className={styles.articleWrapper}>
      <div className={styles.articleImageWrapper}>
        <img src={image.url} alt={image.alt} />
      </div>
      <div className={styles.articleInfoWrapper}>
        <h2>{title}</h2>
        <h3>{formatDateForArticle(publishedDate)}</h3>
        <p>{blurb}</p>
        <Link className={styles.articleLink} href={`article/${id}`}>Read More</Link>
      </div>
    </div>
  );
}
