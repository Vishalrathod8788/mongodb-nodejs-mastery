import { connectToDatabase, client } from "./connection";

const run = async () => {
  const db = connectToDatabase();
  if (!db) {
    console.log("Database object not found!!");
  }
};
