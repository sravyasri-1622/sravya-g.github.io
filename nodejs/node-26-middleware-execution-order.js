const express = require("express");

const app = express();

function firstMiddleware(request, response, next) {

    console.log("1. First middleware");
    next();

}

function secondMiddleware(request, response, next) {

    console.log("2. Second middleware");
    next();

}

function thirdMiddleware(request, response, next) {

    console.log("3. Third middleware");
    next();

}

app.use(firstMiddleware);

app.use(secondMiddleware);

app.use(thirdMiddleware);

app.get("/", function(request, response) {

    console.log("4. Route executed");

    response.send("<h1>Middleware Execution Order Completed</h1>");

});

app.listen(3013, function() {

    console.log("Experiment 26 running at http://localhost:3013");

});