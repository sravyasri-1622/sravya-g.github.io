const express = require("express");

const app = express();

app.get("/", function(request, response, next) {

    const error = new Error("Something went wrong");

    next(error);

});

app.use(function(error, request, response, next) {

    console.log("Error:", error.message);

    response.status(500).send("Internal Server Error");

});

app.listen(3012, function() {

    console.log("Experiment 25 running at http://localhost:3012");

});