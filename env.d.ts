declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      D1_ANALYTICS?: D1Database;
      NEXT_DEPLOYMENT_ID?: string;
      CF_PAGES_URL?: string;
    }
  }
}

export {};
