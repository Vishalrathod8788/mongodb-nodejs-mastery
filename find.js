import { connectToDatabase, client } from "./connection.js";

const run = async () => {
  try {
    const db = await connectToDatabase();
    if (!db) {
      console.log("Database object not found!!");
    }

    const gradesCollection = db.collection("grades");
    // const profileCollection = db.collection("profile");

    const query = {
      scores: {
        $elemMatch: { type: "quiz", score: { $gte: 90 } },
      },
    };
    // const option = { projection: { name: 1, age: 1, _id: 0 } };

    const cursor = gradesCollection.find(query);
    const result = await cursor.toArray();
    console.log(result);
  } catch (error) {
    console.log("Error, Data not finding..");
  } finally {
    await client.close();
  }
};

run();
