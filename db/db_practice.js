var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/db_practice';

use animals;

db.createCollection("cats");

db.cats.insert([{
  name: "Fluffy",
  breed: "Persian"
},
{
  name: "Oscar",
  breed: "Bengal"
},
{
  name: "Bella",
  breed: "Siamese"
}
]);

db.cats.find().pretty();

show collections;

db.dropDatabase();