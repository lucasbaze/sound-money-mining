import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  tweetIds: {
    type: 'array',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
      return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
    },
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://soundmoneymining.com${doc.image}`
        : `https://soundmoneymining.com/api/og?title=${doc.title}`,
      url: `https://soundmoneymining.com/blog/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        // TODO: Ensure other authors get contribution in SEO content
        name: 'Lucas Bazemore',
      },
    }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `content/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    imageAlt: {
      type: 'string',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
