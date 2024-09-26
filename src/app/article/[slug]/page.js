import styles from "../../page.module.css";
import data from "../../data.json";
export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find((article) => slug === article.id);
  return (
    <main>
      <div
        className={styles.articlePageHeaderWrapper}
        style={{
          backgroundImage: `url(${articleData.image.url})`,
        }}
      ></div>
      <h1>{articleData.title}</h1>
      <p>{articleData.publishedDate}</p>
      <p>{articleData.blurb}</p>
      {articleData?.articleText?.map((text, i) => (
        <p key={i}>{text.data}</p>
      ))}
    </main>
  );
}
