import { connectToDatabase, client } from "./connection.js";
import { ObjectId } from "mongodb";

const run = async () => {
  try {
    const db = await connectToDatabase();
    // const gradesCollection = db.collection("grades");
    const profileCollection = db.collection("profile");

    const filter = { "address.city": "Ahmedabad" };
    const updateDoc = {
      $set: { "address.city": "Ahmedabad (Smart City)" },
    };
    const option = { upsert: true };

    const result = await profileCollection.updateMany(
      filter,
      updateDoc,
      option,
    );
    console.log(
      `Data Matched count ${result.matchedCount} and Updated data count ${result.modifiedCount}`,
    );
  } catch (error) {
    console.log("Error, Data not Updated");
  } finally {
    await client.close();
  }
};

run();
