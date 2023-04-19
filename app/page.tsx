import Article from "@/app/Article";
import { Items } from "@/app/types";

export default async function Home() {
  const data = await fetch(
    "https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles"
  );
  const res: Items = await data.json();

  const articles = res.map((item) => <Article key={item.id} {...item} />);

  return (
    <main>
      <div className="container mx-auto px-5 py-12">
        <div className="-mx-4 flex flex-wrap">{articles}</div>
      </div>
    </main>
  );
}
