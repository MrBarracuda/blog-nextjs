import { Item } from "@/app/types";
import Link from "next/link";

export default async function ArticleDetail({ params }: any) {
  const data = await fetch(
    "https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles/" +
      params.article
  );
  const article: Item = await data.json();

  const extendedContent =
    article.content +
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi eos nam quaerat quam, ratione velit veniam! Assumenda consectetur eligendi expedita ipsa minus nostrum odio officia quod tempore ut? Animi beatae, blanditiis, dicta eligendi error fugit iure laboriosam laudantium maxime nihil odit porro praesentium quaerat qui quibusdam quis sint vero" +
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi eos nam quaerat quam, ratione velit veniam! Assumenda consectetur eligendi expedita ipsa minus nostrum odio officia quod tempore ut? Animi beatae, blanditiis, dicta eligendi error fugit iure laboriosam laudantium maxime nihil odit porro praesentium quaerat qui quibusdam quis sint vero";

  return (
    <div className="container mx-auto px-5 py-12">
      <div>
        <h2 className="font-bold text-2xl">{article.title}</h2>
        <p className="leading-loose py-4">{extendedContent}</p>
        <div className="flex items-center justify-between">
          <div className="text-md">
            Author: <span className="font-bold">{article.author}</span>
          </div>
          <div className="text-md">
            Publication date:{" "}
            <span className="font-bold">{article.publicationDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
