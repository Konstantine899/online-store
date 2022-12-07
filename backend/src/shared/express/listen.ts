import { Express } from "express";

export function listen(app: Express) {
  return app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
}
