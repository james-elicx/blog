import type { Metadata } from 'next';

import { IntlDate } from '@/components';
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
    robots: {
      index: !meta.hidden,
    },
  };
};

const Page = async ({ params }: Props) => {
  const { content, meta } = await getBySlug(params.slug);

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1>{meta.title}</h1>

        <div className="flex flex-row justify-between text-sm text-secondary/80 dark:text-secondary-dark/80">
          <IntlDate date={meta.updatedAt} />
        </div>
      </div>

      <div className="flex flex-col gap-4">{content}</div>
    </>
  );
};

export const dynamicParams = false;
export const generateStaticParams = async () => getAllSlugs();

export default Page;
