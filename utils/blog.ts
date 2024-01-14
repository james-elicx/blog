import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { compileMDX } from 'next-mdx-remote/rsc';

const postsDir = resolve('posts');

const coerceDate = (date: string | Date) => (date instanceof Date ? date : new Date(date));

export const getAllSlugs = () =>
  readdirSync(postsDir)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => ({ slug: path.replace(/\.mdx$/, '') }));

export const getBySlug = async (slug: string) => {
  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: readFileSync(resolve(postsDir, `${slug}.mdx`), 'utf8'),
    options: { parseFrontmatter: true },
  });

  return {
    meta: {
      ...frontmatter,
      createdAt: coerceDate(frontmatter.created_at),
      updatedAt: coerceDate(frontmatter.updated_at),
      slug,
    },
    content,
  };
};

export const getAllPosts = async () =>
  Promise.all(getAllSlugs().map(({ slug }) => getBySlug(slug)));

export const getRecentPosts = async (count = 5) => {
  const posts = await getAllPosts();

  return posts
    .map(({ meta }) => meta)
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    .splice(0, count);
};

type Frontmatter = {
  title: string;
  description: string;
  author: string;
  created_at: Date;
  updated_at: Date;
};
