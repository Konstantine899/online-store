import express from "express";
import { Request, Response } from "express";

const app = express();

const { PORT = 5000 } = process.env;

app.get("/", (request: Request, response: Response) => {
  response.send({
    message: "hello world",
  });
});
app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
