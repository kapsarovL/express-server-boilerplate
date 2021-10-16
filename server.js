const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World</h1>");
});

app.get("/about", function(req, res) {
    res.send("My name is Lazar Kapsarov i love to code and build things!");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at:kapsarovlazar@gmail.com");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});