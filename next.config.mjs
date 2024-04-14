// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

// if (process.env.NODE_ENV === 'development') {
//   await setupDevPlatform({
//     bindings: {
//       D1_ANALYTICS: { type: 'd1', databaseName: 'd1_analytics' },
//     },
//   })
//   // CREATE TABLE IF NOT EXISTS pageviews (path TEXT PRIMARY KEY, views INTEGER DEFAULT 0);
// }

const getDeploymentId = () => {
  if (!process.env.CF_PAGES_URL) return undefined;

  const { hostname } = new URL(process.env.CF_PAGES_URL);
  return btoa(hostname.replace('.pages.dev', ''));
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  deploymentId: process.env.NODE_ENV === 'development' ? 'DEV-ID' : getDeploymentId(),
};

export default nextConfig;
