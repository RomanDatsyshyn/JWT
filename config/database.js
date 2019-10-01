const mongoose = require("mongoose");
const mongoDB = "mongodb://drv:hashflare28@ds345937.mlab.com:45937/summer";

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
