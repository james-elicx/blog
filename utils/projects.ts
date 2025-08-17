type Project = { name: string; href: string; desc: string };

export const getProjects = (): Project[] => [
  {
    name: '@opennextjs/cloudflare',
    href: 'https://github.com/opennextjs/opennextjs-cloudflare',
    desc: 'OpenNext adapter for deploying Next.js apps to Cloudflare Workers.',
  },
  {
    name: '@cloudflare/next-on-pages',
    href: 'https://github.com/cloudflare/next-on-pages',
    desc: 'Build tool to deploy Next.js apps to Cloudflare Pages.',
  },
  {
    name: 'build-output-router',
    href: 'https://github.com/james-elicx/build-output-router',
    desc: "Fully-featured routing system for Vercel's Build Output API (v3).",
  },
  {
    name: 'cloudy',
    href: 'https://github.com/james-elicx/cloudy',
    desc: 'File explorer for Cloudflare R2 storage buckets.',
  },
  {
    name: 'cf-bindings-proxy',
    href: 'https://github.com/james-elicx/cf-bindings-proxy',
    desc: 'Experimental proxy for interfacing with Cloudflare bindings.',
  },
  {
    name: 'pgq',
    href: 'https://github.com/james-elicx/pgq',
    desc: 'Job queue system for Go projects that uses Postgres row locks.',
  },
  {
    name: 'itty-fs-router',
    href: 'https://github.com/james-elicx/itty-fs-router',
    desc: 'File-system based router, powered by itty-router.',
  },
  {
    name: 'iron-crypto',
    href: 'https://github.com/iron-auth/iron-crypto',
    desc: 'Implementation of @hapi/iron in Golang.',
  },
  {
    name: 'go-utils',
    href: 'https://github.com/james-elicx/go-utils',
    desc: 'Various utility functions for use in Go projects and when writing tests.',
  },
];
