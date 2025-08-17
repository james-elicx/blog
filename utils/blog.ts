import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { cache } from 'react';

import { compileMDX } from 'next-mdx-remote/rsc';

import { mdxComponents } from '@/components/mdx';

export const postsDir = resolve('posts') as 'posts';
export const snippetsDir = resolve('snippets') as 'snippets';

type Dir = typeof postsDir | typeof snippetsDir;

const coerceDate = (date: string | Date) => (date instanceof Date ? date : new Date(date));

export const getAllSlugs = (dir: Dir) =>
  readdirSync(dir)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => ({ slug: path.replace(/\.mdx$/, '') }));

export const getBySlug = cache(async (dir: Dir, slug: string) => {
  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: readFileSync(resolve(dir, `${slug}.mdx`), 'utf8'),
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  return {
    meta: {
      ...frontmatter,
      createdAt: coerceDate(frontmatter.created_at),
      updatedAt: coerceDate(frontmatter.updated_at),
      slug,
      ogImage: frontmatter.og_image,
    },
    content,
  };
});

export const getAllPosts = async (dir: Dir) =>
  Promise.all(getAllSlugs(dir).map(({ slug }) => getBySlug(dir, slug))).then((v) =>
    v.sort((a, b) => (a.meta.createdAt > b.meta.createdAt ? -1 : 1)),
  );

export const getRecentPosts = async (dir: Dir, count = 5) => {
  const posts = await getAllPosts(dir);

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
  hidden?: boolean;
  og_image?: string;
};
