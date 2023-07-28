import { IntlDate, Section } from '@/components';
import { getRecentPosts } from '@/utils/blog';
import { getProjects } from '@/utils/projects';
import Link from 'next/link';

const Page = async () => {
  const recentPosts = await getRecentPosts();
  const projects = getProjects();

  return (
    <main className="flex flex-col gap-8">
      <Section title="Posts">
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
      </Section>

      <Section title="Projects">
        <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-2 max-xs:grid-cols-1">
          {projects.map((project) => (
            <div key={project.href} className="flex flex-col">
              <Link target="_blank" href={project.href} className="font-semibold">
                {project.name}
              </Link>

              <span className="text-sm">{project.desc}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default Page;
