declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      D1_ANALYTICS?: D1Database;
    }
  }
}

export {};
