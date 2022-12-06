import express from "express";

const app = express();
export async function listen() {
  try {
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
