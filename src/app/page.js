import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  return (
    <div>
      <main className={styles.pageWrapper}>
        <h1>Articles</h1>
        {data.map((article, i) => ( // use .map over forEach to display components in React
          <ArticleCard
          id={article.id}
          key={i} 
          blurb={article.blurb}
          title={article.title} 
          publishedDate={article.publishedDate} 
          image={article.image} /> // "article" represents the value in that array at that current index
        ))}
      </main>
    </div>
  );
}
