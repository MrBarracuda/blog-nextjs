import {Item} from "@/app/page";

export default async function ArticleDetail({params}: any){
  const data = await fetch('https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles/' + params.article);
  const res: Item = await data.json();

  return (
    <div>
      <h1 className="text-2xl">{res.title}</h1>
    </div>
  )
}