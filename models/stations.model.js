const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;
const StationSchema = new Schema({
  name: { type: String, trim: true, required: true },
  address: { type: Date, trim: true, required: true }
});

module.exports = mongoose.model("Station", StationSchema);
