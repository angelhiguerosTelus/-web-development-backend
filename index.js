const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const { getUrls, addUrls, getSecrets, addSecrets } = require("./src/bd/actionJson");
const PORT = 8000

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Enpoints - URL Shortener
app.get("/url", (req, res) => {
  let response = getUrls();
  res.send(response);
});

app.post("/url", (req, res) => {
  let response = addUrls(req.body.url);
  res.send(response);
});

// Enpoints - One time secret
app.get("/secret", (req, res) => {
  let response = getSecrets();
  res.send(response);
});

app.post("/secret", (req, res) => {
  let response = addSecrets(req.body.secret);
  res.send(response);
});

// Starting server.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
