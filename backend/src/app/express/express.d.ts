declare namespace Express {
  export interface Request {
    user: any;
  }
  export interface Response {
    user: any;
  }
}

declare const PORT: number | undefined;
declare const FILES_PATH: string;
declare const SECRET_KEY: string;
