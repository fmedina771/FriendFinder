//Require packages
// ============================================
const express = require("express");
var bodyParser = require("body-parser");
const path = require("path")

// Instantiating express server
// ============================================
const app = express();
const PORT = 3000;

app.listen(PORT);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});