type Item = {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publicationDate: string;
}

type Items = Item[];

export default async function Home() {
  const data = await fetch('https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles');
  const res: Items = await data.json();

  return (
    <main>
      <h1 className="text-2xl py-2 m-4 uppercase">Blog app nextjs</h1>
      <ul>
        {res.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <p>{item.content}</p>
            <p>{item.author}</p>
            <p>{item.publicationDate}</p>
          </div>
        ))}
      </ul>
    </main>
  )
}
