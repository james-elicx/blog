export const GET = () =>
  new Response(
    JSON.stringify({
      deploymentId: process.env.NEXT_DEPLOYMENT_ID,
      deploymentTimestamp: Date.now(),
    }),
  );

export const dynamic = 'force-static';
