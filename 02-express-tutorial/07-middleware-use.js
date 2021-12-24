const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   //   res.send("Testing");

//   next();
// };

// app.use("/api", logger);
// app.use([logger, authorize]);
app.use(morgan("tiny"));

// req => middleware => res

// 1. use vs route
// 2. options - our own/express/third party

app.get("/", (req, res) => {
  //   const method = req.method;
  //   const url = req.url;
  //   const time = new Date().getFullYear();
  //   console.log(method, url, time);
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, logger, () => {
  console.log("Server is listening on port 5000...");
});
