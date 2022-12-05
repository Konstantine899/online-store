export type BuildMode = "development" | "production";
export type BuildPath = {
  entry: string;
  build: string;
};

export interface BuildEnv {
  port: number;
}

export interface BuildDB {
  NAME: string;
  USER: string;
  PASSWORD: string;
  HOST: string;
  PORT: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
  DB: BuildDB;
}
