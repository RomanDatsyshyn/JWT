const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./config/database");
var jwt = require("jsonwebtoken");

const users = require("./routes/users.route");
const stations = require("./routes/stations.route");

const app = express();
const port = process.env.PORT || 5000;

//  JWT secret token
app.set("secretKey", "nodeRestApi");

//  HTTP request logger middleware
app.use(logger("dev"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connection to mongodb
db.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// Public route
app.use("/users", users);

// Private route
app.use("/stations", validateUser, stations);

function validateUser(req, res, next) {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    (err, decoded) => {
      if (err) {
        res.json({ status: "error", message: err.message, data: null });
      } else {
        // Add user id to request
        req.body.userId = decoded.id;
        next();
      }
    }
  );
}

// Express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// Handle 404 error
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Handle errors
app.use((err, req, res, next) => {
  console.log(err);
  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Something looks wrong :( !!!" });
});

app.listen(port, () => console.log(`Node server listening on port ${port}`));
