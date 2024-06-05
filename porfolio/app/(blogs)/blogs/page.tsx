import Link from "next/link";
import { formatDate } from "@/lib/formatDate"
import { getAllBlogsEntries } from "@/utils/callContentful"

const MyBlogs = async() => {
    const blogs = await getAllBlogsEntries()
    return (
        <main className="h-screen sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2 sm:content-start sm:mt-10 block">
        {blogs.items.map((singlePost) => {
          const { id, slug, title, date, thumbnail, authorName, categoryName } = singlePost.fields;
          const thumbnailLink = `https:${thumbnail.fields.file.url}`
          return (
            <div key={slug} className="block max-w-sm xl:p-2 p-4 sm:m-10 m-10 mt-20 bg-white rounded-lg shadow hover:bg-sky-100">
              <Link href={`/blogs/${id}/${slug}`}>
              <img className="flex w-full" src={thumbnailLink} width={250}/>
                <div>
                  <h2 className="font-bold text-xl">{title}</h2>
                  <p>By {authorName}</p>
                  <p>Category: {categoryName}</p>
                  <span>
                    Posted on {formatDate(date)}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </main>
    )
}

export default MyBlogs