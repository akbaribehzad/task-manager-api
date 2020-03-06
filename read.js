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

    // db.collection("users").findOne({ name: "Ali", age: 1 }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to find that name");
    //   }

    //   console.log(user);
    // });

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5e5546aed575c41e5422803e") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to find that name");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       console.log("Unable to fetch");
    //     }

    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 20 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    db.collection("tasks").findOne(
      { _id: new ObjectID("5e552f9f3e48d73614b1578e") },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
