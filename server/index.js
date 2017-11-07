const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "../", "client")));

app.get("/", (req, res) => {
  res.send(200);
});

app.listen(PORT, err => {
  err
    ? console.log("could not connect")
    : console.log("listening on port:", PORT);
});
