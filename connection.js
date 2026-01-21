import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.URI;
export const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Successfully Database Connected...`);
    return client.db("students");
  } catch (error) {
    console.log(`Error connecting database`);
  }
};

connectToDatabase();
