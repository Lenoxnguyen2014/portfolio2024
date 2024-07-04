import { createClient } from 'contentful'
import { BlogQueryResult } from '@/src/type'

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
})

// content type: content type ID
export const getAllBlogsEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: 'blogPost' })

  return entries
}

export const getPerBlogEntry = async (id: string) => {
  const entry = await client.getEntries({ content_type: 'blogPost', limit: 1, 'fields.id': id }).then((entry) => entry)

  return entry
}

export const getAllProjectEntry = async () => {
  const entries = await client.getEntries({ content_type: 'projects' })

  return entries
}

export const getPerProjectEntry = async (id: string) => {
  const entry = await client.getEntries({ content_type: 'projects', limit: 1, 'fields.id': id}).then((entry) => entry)

  return entry
}

export const getIntroAboutMe = async () => {
  const entries = await client.getEntries({ content_type: 'aboutMe' })

  return entries
}