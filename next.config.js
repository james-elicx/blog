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
    return new URL(process.env.CF_PAGES_URL).hostname.replace('.pages.dev', '');
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  deploymentId: getDeploymentId(),
};

module.exports = nextConfig;
