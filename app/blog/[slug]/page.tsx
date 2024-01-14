import type { Metadata } from 'next';

import { getAllSlugs, getBySlug } from '@/utils/blog';

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getBySlug(params.slug);

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
    },
  };
};

const Page = async ({ params }: Props) => {
  const { content } = await getBySlug(params.slug);

  return <main>{content}</main>;
};

export const dynamicParams = false;
export const generateStaticParams = async () => getAllSlugs();

export default Page;
