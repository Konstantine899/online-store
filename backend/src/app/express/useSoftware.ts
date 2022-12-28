import express, { Express } from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

export function useSoftware(app: Express) {
  app.use(cors());
  app.use(express.json());
  app.use(fileUpload({ createParentPath: true }));
}
