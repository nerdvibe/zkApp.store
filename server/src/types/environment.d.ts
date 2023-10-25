export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      LOG_LEVEL: string;
      JWT_ACCESS_TOKEN: string;
      JWT_REFRESH_TOKEN: string;
      EMAIL_FROM_DEFAULT: string;
      EMAIL_TRANSPORTER_SERVICE: string;
      EMAIL_TRANSPORTER_USER: string;
      EMAIL_TRANSPORTER_PASSWORD: string;
      MONGO_DB: string;
    }
  }
}
