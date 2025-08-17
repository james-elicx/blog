import Link from 'next/link';

import { Grid, Section } from '@/components/blocks';
import { IntlDate } from '@/components/typography';
import { getRecentPosts, postsDir, snippetsDir } from '@/utils/blog';
import { getProjects } from '@/utils/projects';

const Page = async () => {
  const recentPosts = await getRecentPosts(postsDir);
  const recentSnippets = await getRecentPosts(snippetsDir);
  const projects = getProjects();

  return (
    <main className="flex flex-col gap-8">
      <Section.Root>
        <Section.Title>Posts</Section.Title>

        <Section.Body>
          {recentPosts.map((post) => (
            <div key={post.slug} className="flex flex-col">
              <div className="flex flex-row justify-between max-xs:flex-col-reverse md:items-center">
                <Link
                  href={`/blog/${post.slug}`}
                  className=" text-lg font-semibold"
                  prefetch={false}
                >
                  {post.title}
                </Link>

                <IntlDate
                  date={post.createdAt}
                  className="text-sm text-secondary/80 dark:text-secondary-dark/80"
                />
              </div>

              {/* <span className="text-base">{post.description}</span> */}
            </div>
          ))}
        </Section.Body>
      </Section.Root>

      <Section.Root>
        <Section.Title link={{ text: 'View all', href: '/snippets' }}>
          Latest Snippets
        </Section.Title>

        <Grid.Root>
          {recentSnippets.map((snippet) => (
            <div key={snippet.slug} className="flex flex-col justify-between gap-1">
              <div className="flex flex-col">
                <Link
                  href={`/snippets/${snippet.slug}`}
                  className="text-lg font-semibold"
                  prefetch={false}
                >
                  {snippet.title}
                </Link>

                <span className="text-sm">{snippet.description}</span>
              </div>

              <span className="w-fit rounded-lg bg-secondary px-2 text-xs font-semibold text-secondary/80 dark:bg-secondary-dark dark:text-secondary-dark/80">
                TypeScript
              </span>
            </div>
          ))}
        </Grid.Root>
      </Section.Root>

      <Section.Root>
        <Section.Title>Projects</Section.Title>

        <Section.Body>
          <Grid.Root>
            {projects.map((project) => (
              <Grid.Item key={project.href}>
                <Link target="_blank" href={project.href} className="font-semibold">
                  {project.name}
                </Link>

                <span className="text-sm">{project.desc}</span>
              </Grid.Item>
            ))}
          </Grid.Root>
        </Section.Body>
      </Section.Root>
    </main>
  );
};

export default Page;
