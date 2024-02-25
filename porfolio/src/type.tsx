//typescript for all types go in here

/* types.ts */
import { Document } from '@contentful/rich-text-types';
export type BlogItem = {
    fields: {
        title: string;
        thumbnail: Link;
        slug: string;
        date: Date;
        content: Document;
        authorName: string;
        categoryName: string
    }
}
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems;
}