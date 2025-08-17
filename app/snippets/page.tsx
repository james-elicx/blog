import Link from 'next/link';

import type { Metadata } from 'next';

import { Grid, Section } from '@/components/blocks';
import { getAllPosts, snippetsDir } from '@/utils/blog';

export const generateMetadata = async (): Promise<Metadata> => {
  const allSnippets = await getAllPosts(snippetsDir);

  return {
    title: 'Snippets',
    description: 'Code snippets and examples',
    openGraph: {
      title: 'Snippets',
      description: 'Code snippets and examples',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      publishedTime: `${allSnippets[allSnippets.length - 1]!.meta.created_at}`,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      modifiedTime: `${allSnippets[0]!.meta.created_at}`,
    },
  };
};

const Page = async () => {
  const allSnippets = await getAllPosts(snippetsDir);

  return (
    <Section.Root>
      <h1>Snippets</h1>

      <Grid.Root>
        {allSnippets.map((snippet) => (
          <div key={snippet.meta.slug} className="flex flex-col justify-between gap-1">
            <div className="flex flex-col">
              <Link
                href={`/snippets/${snippet.meta.slug}`}
                className="text-lg font-semibold"
                prefetch={false}
              >
                {snippet.meta.title}
              </Link>

              <span className="text-sm">{snippet.meta.description}</span>
            </div>

            <span className="w-fit rounded-lg bg-secondary px-2 text-xs font-semibold text-secondary/80 dark:bg-secondary-dark dark:text-secondary-dark/80">
              TypeScript
            </span>
          </div>
        ))}
      </Grid.Root>
    </Section.Root>
  );
};

export default Page;
