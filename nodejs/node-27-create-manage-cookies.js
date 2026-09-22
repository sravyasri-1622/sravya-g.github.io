const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", function(request, response) {

    response.cookie("username", "Sravya");

    response.send("<h1>Cookie Created Successfully</h1>");

});

app.listen(3014, function() {

    console.log("Experiment 27 running at http://localhost:3014");

});