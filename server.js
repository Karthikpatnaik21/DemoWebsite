// Server
const express = require("express");

const app = express();

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

app.use(express.static("Public"))

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html")
});
app.get("/Log-In.html", function(req, res){
  res.sendFile(__dirname + "/Log-In.html")
});
app.get("/Sign-In.html", function(req, res){
  res.sendFile(__dirname + "/Sign-In.html")
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server has started at 3000");
});
