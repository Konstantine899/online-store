export type BuildMode = "development" | "production";
export type BuildPath = {
  entry: string;
  build: string;
  nodemon_watch: string;
  src: string;
  files: string;
};

export interface BuildEnv {
  port: number;
  mode: number;
}

export interface BuildDB {
  NAME: string;
  USER: string;
  PASSWORD: string;
  HOST: string;
  PORT: number;
  DB_LOG: boolean;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
  DB: BuildDB;
  secretKeyForGenerateToken: string;
}
