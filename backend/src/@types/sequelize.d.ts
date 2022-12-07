declare const PORT: string | undefined;
declare interface IDB {
  NAME: string;
  USER: string;
  PASSWORD: string;
  HOST: string;
  PORT: number;
  DB_LOG: boolean
}
declare const DB: IDB;
