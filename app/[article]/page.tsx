import { Item } from "@/app/types";

export default async function ArticleDetail({params}: any){
  const data = await fetch('https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles/' + params.article);
  const article: Item = await data.json();

  return (
    <div className="grid h-screen place-items-center">
      <h1 className="text-2xl">{article.title}</h1>
    </div>
  )
}