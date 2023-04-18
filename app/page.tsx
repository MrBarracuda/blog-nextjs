import Article from "@/app/Article";

export type Item = {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publicationDate: string;
}

export type Items = Item[];

export default async function Home() {
  const data = await fetch('https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles');
  const res: Items = await data.json();

  return (
    <main>
      <h1 className="text-2xl py-2 m-4 uppercase text-center">Blog app nextjs</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.map((item) =>
          <Article key={item.id} {...item}/> )}
      </div>
    </main>
  )
}
