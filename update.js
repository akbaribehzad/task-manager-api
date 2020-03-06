//CRUD - Create Read Update Delete

// Object destructuring
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("5e552875fde4383f0075216b")
    //   },
    //   {
    //     $set: {
    //       name: "Alijan"
    //     }
    //   }
    // );

    // updatePromise
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(() => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5e552875fde4383f0075216b")
    //     },
    //     {
    //       $set: {
    //         name: "Alijan"
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(() => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5e552875fde4383f0075216b")
    //     },
    //     {
    //       $inc: {
    //         age: +1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(() => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
