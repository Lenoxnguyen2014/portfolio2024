import { createClient } from "contentful";
import { BlogQueryResult } from "@/src/type";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

const getAllBlogsEntries = async(): Promise<BlogQueryResult> => {
    const entries = await client.getEntries({ content_type: "blogPost" })
    return entries
}
const MyBlogs = async() => {
    const blogs = await getAllBlogsEntries()
    return (
        <main className="h-screen grid grid-cols-4 gap-2 content-start mt-10">
        {blogs.items.map((singlePost) => {
          const { slug, title, date, thumbnail, authorName, categoryName } = singlePost.fields;
          const thumbnailLink = `https:${thumbnail.fields.file.url}`
          return (
            <div key={slug} className="block max-w-sm p-20 ml-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <Link href={`/blogs/${slug}`}>
              <img className="float-start" src={thumbnailLink} width={100}/>
                <h2>{title}</h2>
                <p>By {authorName}</p>
                <p>{categoryName}</p>
                <span>
                  Posted on
                  {formatDate(date)}
                </span>
              </Link>
            </div>
          );
        })}
      </main>
    )
}

export default MyBlogs