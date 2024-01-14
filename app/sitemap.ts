import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/utils/blog';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) throw new Error('Missing env: BASE_URL');

  const posts = await getAllPosts();

  return [
    {
      url: `https://${baseUrl}`,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `https://${baseUrl}/blog/${post.meta.slug}`,
      lastModified: post.meta.updatedAt,
    })),
  ];
};

export default sitemap;
