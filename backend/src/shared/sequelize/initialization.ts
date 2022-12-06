import { connection } from "./connection";
export async function initialization() {
  try {
    await connection.authenticate();
    await connection.sync();
  } catch (error) {
    console.log(error);
  }
}
