// if (process.env.NODE_ENV === 'development') {
//   const { setupDevBindings } = require('@cloudflare/next-on-pages/next-dev');

//   setupDevBindings({
//     bindings: {
//       D1_ANALYTICS: { type: 'd1', databaseName: 'd1_analytics' },
//     },
//   });

//   // CREATE TABLE IF NOT EXISTS pageviews (path TEXT PRIMARY KEY, views INTEGER DEFAULT 0);
// }

const getDeploymentId = () => {
  if (process.env.CF_PAGES_URL) {
    const { hostname } = new URL(process.env.CF_PAGES_URL);
    return btoa(hostname.replace('.pages.dev', ''));
    // OR, one can do: `return hostname.split('.')[0];`
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  deploymentId: getDeploymentId(),
};

module.exports = nextConfig;
