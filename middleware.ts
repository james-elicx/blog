import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (req: NextRequest, event: NextFetchEvent) => {
  event.waitUntil(
    process.env.D1_ANALYTICS.prepare(
      'INSERT INTO pageviews (path, views) VALUES (?, 1) ON CONFLICT DO UPDATE SET views = pageviews.views + 1',
    )
      .bind(req.nextUrl.pathname)
      .run(),
  );

  return NextResponse.next();
};

export const config = {
  matcher: ['/blog/:slug*'],
};
