import Article from "@/app/components/Article";
import { Articles } from "@/app/types";
import { getData } from "@/app/utilities/getData";

export default async function Home() {
  const articles: Articles = await getData();
  const renderedArticles = articles.map((item) => <Article key={item.id} {...item} />);

  return (
    <main>
      <div className="container mx-auto px-5 py-12">
        <div className="-mx-4 flex flex-wrap">{renderedArticles}</div>
      </div>
    </main>
  );
}
