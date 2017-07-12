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

app.get('/api/friends', function (req, res) {
  res.json(friends)
});

app.post("/api/friends", function(req, res) {

	var newFriend = req.body;

	console.log(newFriend)

	friends.push(newFriend)

	res.json(newFriend)
})


var friends = [

{
   name: "Vanessa",
   photo: "https://www.axure.com/c/attachments/forum/7-0-general-discussion/3919d1401387174-turn-placeholder-widget-into-image-maintain-interactions-screen-shot-2014-05-29-10.46.57-am.png",
   scores: [5,2,4,1,3,5,2,4,2,1]

}, {

   name: "Bobby Brown",
   photo: "http://media.tmz.com/2016/06/03/060316-bobby-brown-4.jpg",
   scores: [1,2,2,1,4,5,5,4,2,1]

}, {
   name: "Fernando",
   photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwitgIfv6YHVAhUDeT4KHUU1BiIQjRwIBw&url=http%3A%2F%2F1000uglypeople.com%2Fcategory%2Fugly-people%2Fugly-men-and-guys%2Fpage%2F3%2F&psig=AFQjCNEJCai6E1G5o28MzQ6KIvNAyfoQHA&ust=1499883037040005",
   scores: [4,2,2,1,4,5,4,4,2,5]


}, {

   name: "Jake",
   photo: "https://www.axure.com/c/attachments/forum/7-0-general-discussion/3919d1401387174-turn-placeholder-widget-into-image-maintain-interactions-screen-shot-2014-05-29-10.46.57-am.png",
   scores: [2,2,3,2,1,5,2,5,2,5]

}

];