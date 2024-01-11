export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      LOG_LEVEL: string;
      JWT_ACCESS_TOKEN: string;
      JWT_REFRESH_TOKEN: string;
      COOKIE_SECRET_PASSWORD_ADMIN: string;
      EMAIL_FROM_DEFAULT: string;
      EMAIL_TRANSPORTER_SERVICE: string;
      EMAIL_TRANSPORTER_USER: string;
      EMAIL_TRANSPORTER_PASSWORD: string;
      MONGO_DB: string;
      S3_BUCKET_NAME: string;
      S3_REGION: string;
      S3_ENDPOINT: string;
      S3_ACCESS_KEY_ID: string;
      S3_SECRET_ACCESS_KEY: string;
    }
  }
}
