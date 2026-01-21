import { connectToDatabase, client } from "./connection.js";

const insertData = async () => {
  try {
    const db = await connectToDatabase();

    if (!db) {
      console.log(`Database object not found`);
      return;
    }

    // const profile = db.collection("profile");
    const gradesCollection = db.collection("grades");
    const manyData = [
      {
        student_id: 202,
        class_id: 500,
        scores: [
          {
            type: "exam",
            score: 95,
          },
          {
            type: "quiz",
            score: 80,
          },
          {
            type: "homework",
            score: 100,
          },
        ],
        last_updated: "2024-05-20T10:00:00Z",
      },
      {
        student_id: 303,
        class_id: 600,
        scores: [
          {
            type: "exam",
            score: 90,
          },
          {
            type: "quiz",
            score: 75,
          },
          {
            type: "homework",
            score: 95,
          },
        ],
        last_updated: "2026-01-1T10:00:00Z",
      },
      {
        student_id: 404,
        class_id: 600,
        scores: [
          {
            type: "exam",
            score: 85,
          },
          {
            type: "quiz",
            score: 90,
          },
          {
            type: "homework",
            score: 90,
          },
        ],
        last_updated: "2026-01-10T10:00:00Z",
      },
      {
        student_id: 505,
        class_id: 500,
        scores: [
          {
            type: "exam",
            score: 80,
          },
          {
            type: "quiz",
            score: 70,
          },
          {
            type: "homework",
            score: 85,
          },
        ],
        last_updated: "2024-05-20T10:00:00Z",
      },
    ];

    let result = await gradesCollection.insertMany(manyData);
    console.log(`Data Succesfully Inserted ${result.insertedCount}`);
  } catch (error) {
    console.log("Documents not inserted");
  } finally {
    await client.close();
  }
};

insertData();
