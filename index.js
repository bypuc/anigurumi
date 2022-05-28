let express = require("express");
let app = express();
app.use("/public",express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("pages/main");

})

app.get("/anime",function(req,res){
    res.render("pages/anime");
})

app.get("/animore",function(req,res){
    res.render("pages/animore");
})

app.get("/manga",function(req,res){
    res.render("pages/manga");
})

app.get("/manmore",function(req,res){
    res.render("pages/manmore");
})

app.listen("3000");