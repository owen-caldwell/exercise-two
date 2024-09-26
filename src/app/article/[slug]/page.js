import styles from "../../page.module.css";
import data from "../../data.json";
import ArticleTextDisplay from "../../components/ArticleTextDisplay";
import { formatDateForArticle } from "../../components/utils";
export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find((article) => slug === article.id);
  return (
    <main>
      <div
        className={styles.articlePageHeader}
        style={{
          backgroundImage: `url(${articleData.image.url})`,
        }}
      >
        <div className={styles.articlePageHeaderWrapper}>
          <h1 className={styles.articleTitle}>{articleData.title}</h1>
          <p className={styles.publishDate}>{formatDateForArticle(articleData.publishedDate)}</p>
          <p>{articleData.blurb}</p>
        </div>
      </div>
      <div className={styles.articleText}>
        {articleData?.articleText?.map((text, i) => (
          <ArticleTextDisplay
            key={i}
            data={text.data}
            type={text.type}
          />
        ))}
      </div>
    </main>
  );
}
