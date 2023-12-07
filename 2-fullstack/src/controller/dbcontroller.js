// let mongo = require("mongodb");
// let MongoClient = mongo.MongoClient;
// let mongoUrl = "mongodb://127.0.0.1:27017";
// let db;

// function dbConnect() {
//   MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
//     if (err) console.log(`Error While connecting to MongoDB: ${err}`);
//     db = client.db("akanode");
//   });
// }

// async function getData(colName, query) {
//   return await db.collection(colName).find(query).toArray();
// }

// module.exports = {
//   dbConnect,
//   getData,
// };
let mongo = require("mongodb");
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://127.0.0.1:27017";
let db;

function dbConnect() {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) console.log(`Error while connecting to mongodb:${err}`);
    db = client.db("akanode");
  });
}
async function getData(colName, query) {
  return await db.collection(colName).find(query).toArray();
}
module.exports = {
  dbConnect,
  getData,
};
