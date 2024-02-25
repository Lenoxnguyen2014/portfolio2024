import { ContentfulClientApi, createClient } from "contentful";
import { BlogQueryResult } from "@/src/type";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate"

const client: ContentfulClientApi = createClient({
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {blogs.items.map((singlePost) => {
          const { slug, title, date, thumbnail, authorName, categoryName } = singlePost.fields;
          const thumbnailLink = `https:${thumbnail.fields.file.url}`
          return (
            <div key={slug} >
              <Link href={`/blogs/${slug}`}>
              <img src={thumbnailLink} width={60} height={60}/>
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