type Project = { name: string; href: string; desc: string };

export const getProjects = (): Project[] => [
  {
    name: '@cloudflare/next-on-pages',
    href: 'https://github.com/cloudflare/next-on-pages',
    desc: 'CLI tool that you can use to build and develop Next.js applications so that they can run on the Cloudflare Pages platform.',
  },
  {
    name: 'cf-bindings-proxy',
    href: 'https://github.com/james-elicx/cf-bindings-proxy',
    desc: 'Experimental proxy for interfacing with bindings in projects targeting Cloudflare Pages.',
  },
  {
    name: 'cloudy',
    href: 'https://github.com/james-elicx/cloudy',
    desc: 'File explorer for exploring Cloudflare R2 storage buckets, with support for access control, uploading, and more.',
  },
  {
    name: 'pgq',
    href: 'https://github.com/james-elicx/pgq',
    desc: 'Job queue system for Golang projects that uses Postgres row locks.',
  },
  {
    name: 'itty-fs-router',
    href: 'https://github.com/james-elicx/itty-fs-router',
    desc: 'Simple and fast file-system based router, powered by itty-router, for use with Cloudflare Workers or Pages.',
  },
  {
    name: 'iron-crypto',
    href: 'https://github.com/iron-auth/iron-crypto',
    desc: "Implementation of @hapi/iron in go. Encapsulated tokens (encrypted and mac'ed objects).",
  },
  {
    name: 'iron-auth',
    href: 'https://github.com/iron-auth/iron-auth',
    desc: 'A modular, edge-first authentication library, built to be framework agnostic.',
  },
  {
    name: 'go-utils',
    href: 'https://github.com/james-elicx/go-utils',
    desc: 'Various utility functions for use in Go projects and when writing tests.',
  },
  {
    name: 'ethereum blockchain explorer',
    href: 'https://etherexplorer.io',
    desc: 'View information about wallets, transactions, and blocks on the Ethereum blockchain.',
  },
];
