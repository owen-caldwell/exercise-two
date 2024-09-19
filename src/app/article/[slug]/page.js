export default function Article({ params }) {
  console.log(params);
  return (
    <div>
      <main>
        <h1>Slug: {params.slug}</h1>
      </main>
    </div>
  );
}
