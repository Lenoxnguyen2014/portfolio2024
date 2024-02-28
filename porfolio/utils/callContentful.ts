import { createClient } from "contentful";
import { BlogQueryResult } from "@/src/type";
import { revalidatePath } from "next/cache";

const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })
  
export const getAllBlogsEntries = async(): Promise<BlogQueryResult> => {
      const entries = await client.getEntries({ content_type: "blogPost" })
      return entries
  }

export const getPerBlogEntry = async(id: string) => {
    const entry = await client.getEntries({content_type: "blogPost", limit: 1, "fields.id": id }).then((entry) => entry)

    return entry
    }


