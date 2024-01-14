import Link from 'next/link';

import { Grid, IntlDate, Section } from '@/components';
import { getRecentPosts } from '@/utils/blog';
import { getProjects } from '@/utils/projects';

const Page = async () => {
  const recentPosts = await getRecentPosts();
  const projects = getProjects();

  return (
    <main className="flex flex-col gap-8">
      <Section.Root>
        <Section.Title>Posts</Section.Title>

        <Section.Body>
          {recentPosts.length ? (
            recentPosts.map((post) => (
              <div key={post.slug} className="flex flex-col">
                <div className="flex flex-row justify-between max-xs:flex-col-reverse">
                  <Link href={`/blog/${post.slug}`} className="font-semibold">
                    {post.title}
                  </Link>

                  <IntlDate date={post.createdAt} className="text-sm" />
                </div>

                <span className="truncate text-sm">{post.description}</span>
              </div>
            ))
          ) : (
            <span>No posts found...</span>
          )}
        </Section.Body>
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
