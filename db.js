const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected"))
.catch((e)=>console.log(e));

let db = mongoose.connection;

module.exports = db;