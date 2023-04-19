import Link from "next/link";
import { Item } from "@/app/types";

export default function Article({title, publicationDate, id, author, content, summary}: Item) {
  return (
    <div className="card-compact w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="rounded-md p-2 shadow-md bg-purple-50">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{summary}</p>
          <div className="card-actions items-center justify-between">
            <h4 className="text-xs font-bold">{author}</h4>
            <h4 className="text-xs font-bold">{publicationDate}</h4>
            <Link href={`/${id}`} key={id} className="btn-primary btn btn-wide">Click to see details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}