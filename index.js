const express = require("express");
const app = express();

const CloudinaryComponent = require("./CloudinaryComponent.js");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/color/:imageName", (req, res) => {
  const colors = CloudinaryComponent.getColors(req.params.imageName);
  res.send(colors);
});

app.listen(3030, () => {
  console.log("running!");
});
