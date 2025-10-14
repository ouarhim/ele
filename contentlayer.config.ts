import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: any = {
  url: {
    type: "string",
    resolve: (post: any) => `/blog/${post._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.flattenedPath.replace("blog/", ""),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
    ],
  },
});