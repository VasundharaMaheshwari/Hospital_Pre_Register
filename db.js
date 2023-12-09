// const { MongoClient } = require('mongodb')
// require('dotenv').config() 
// let dbConnection
// module.exports={ // to allow export of custom functions
//     connectToDb: (cb) => { //function to fire after conection regardless of success or failure 
//         MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then((client) => {
//             dbConnection = client.db()
//             return cb()
//         }).catch((err)=> {
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb: () => dbConnection
// }
const mongoose = require('mongoose');
require('dotenv').config() 
//const log = require('../log');
//let dbConnection
const connectDB = async ()=> {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // dbConnection = conn.connection.db
    // console.log(dbConnection)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB //, dbConnection;