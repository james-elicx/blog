import type { MetadataRoute } from 'next';

import { getAllPosts, postsDir, snippetsDir } from '@/utils/blog';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) throw new Error('Missing env: BASE_URL');

  const posts = await getAllPosts(postsDir);
  const snippets = await getAllPosts(snippetsDir);

  return [
    {
      url: `https://${baseUrl}`,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `https://${baseUrl}/blog/${post.meta.slug}`,
      lastModified: post.meta.updatedAt,
    })),
    {
      url: `https://${baseUrl}/snippets`,
      lastModified: new Date(),
    },
    ...snippets.map((snippet) => ({
      url: `https://${baseUrl}/snippets/${snippet.meta.slug}`,
      lastModified: snippet.meta.updatedAt,
    })),
  ];
};

export default sitemap;
