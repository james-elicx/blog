import type { Metadata } from 'next';

import { getAllSlugs, getBySlug, snippetsDir } from '@/utils/blog';

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getBySlug(snippetsDir, params.slug);

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: meta.author }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      publishedTime: `${meta.created_at}`,
      modifiedTime: `${meta.updated_at}`,
      authors: meta.author,
      images: meta.ogImage && { url: meta.ogImage },
    },
  };
};

const Page = async ({ params }: Props) => {
  const { content, meta } = await getBySlug(snippetsDir, params.slug);

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1>{meta.title}</h1>

        <p>{meta.description}</p>
      </div>

      <div className="flex flex-col gap-4">{content}</div>
    </>
  );
};

export const dynamicParams = false;
export const generateStaticParams = async () => getAllSlugs(snippetsDir);

export default Page;
