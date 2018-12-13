var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var logger = require("morgan");



var db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articles";
mongoose.connect(MONGODB_URI)

app.get("/scrape", function(req, res){
    axios.get("https://apnews.com/apf-lifestyle").then(function(response){
        var $ = cheerio.load(response.data);

    $(".FeedCard").each(function(i, element){
        var result = {}
        console.log(result);

   result.title =  $(element).children(".CardHeadline").children(".headline").children("h1").text()
   result.link =  $(element).children(".CardHeadline").children(".headline").attr("href")
   result.summary = $(element).children(".content-container").children(".content").children("p").text()


    })
    })

})
var PORT = process.env.PORT || 3000
    app.listen(PORT, function(){
        console.log("app is running")
    })