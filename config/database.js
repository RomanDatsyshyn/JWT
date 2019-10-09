const mongoose = require("mongoose");
const mongoDB = "mongodb://";

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
