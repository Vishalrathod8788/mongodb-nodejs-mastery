import { ObjectId } from "mongodb";
import { connectToDatabase, client } from "./connection.js";

const run = async () => {
  try {
    const db = await connectToDatabase();
    const gradesCollection = db.collection("grades");

    const filter = { _id: new ObjectId("69703d5846b214a0ebd04b20") };

    const result = await gradesCollection.deleteOne(filter);
    console.log(`Deleted ${result.deletedCount} documents`);
  } catch (error) {
    console.log("Error, Data not Deleted!", error);
  } finally {
    await client.close();
  }
};

run();
