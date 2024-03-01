declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_AUTH_LOGIN: string;
    NEXT_PUBLIC_AUTH_PASS: string;
    NEXT_PUBLIC_DOMAIN_URL: string;
  }
}
//https://github.com/nextauthjs/next-auth-example/blob/main/process.d.ts
