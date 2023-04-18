import {Item} from "@/app/page";
import Link from "next/link";

export default function Article({title, publicationDate, id, author, content, summary}: Item){
  return (
    <div className="m-8">
      <h1>{title}</h1>
      <h2>Publication date {publicationDate}</h2>
      <h3>{summary}</h3>
      <p>{content}</p>
      <h3>{author}</h3>
      <Link href={`/${id}`}>Click to see details</Link>
    </div>
  )
}