import data from "./data.json";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Article Listng</h1>
        {data.map((article) => (
          <h2>{article.title}</h2>
        ))}
      </main>
    </div>
  );
}
