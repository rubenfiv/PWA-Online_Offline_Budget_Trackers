let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/budget", 
    {
    useNewUrlParser: true,
    useFindAndModify: false
  }
  );  

  let transactionSeed = [
      {
        name: "Netflix",
        value: 15,
        date: new Date(new Date().setDate(new Date().getDate() - 4))
      },
      {
        name: "Rent",
        value: 1000,
        date: new Date(new Date().setDate(new Date().getDate() - 3))
      },
      {
        name: "Internet",
        value: 70,
        date: new Date(new Date().setDate(new Date().getDate() - 2))
      }
  ];

  db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
