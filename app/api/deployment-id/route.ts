export const GET = () =>
  new Response(
    JSON.stringify({
      id: process.env.NEXT_DEPLOYMENT_ID,
      buildTime: Date.now(),
    }),
  );

export const dynamic = 'force-static';
