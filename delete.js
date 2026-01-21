import { connectToDatabase, client } from "./connection.js";

const run = async () => {
  try {
    const db = await connectToDatabase();
    const gradesCollection = db.collection("grades");

    const filter = {
      scores: { $elemMatch: { type: "exam", score: { $lte: 90 } } },
    };

    const result = await gradesCollection.deleteMany(filter);
    console.log(`Deleted ${result.deletedCount} documents`);
  } catch (error) {
    console.log("Error, Data not Deleted!", error);
  } finally {
    await client.close();
  }
};

run();
