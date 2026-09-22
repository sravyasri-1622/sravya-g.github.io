const express = require("express");

const app = express();

const router = express.Router();

router.get("/", function(request, response) {
    response.send("<h1>Student Home</h1>");
});

router.get("/profile", function(request, response) {
    response.send("<h1>Student Profile</h1>");
});

router.get("/marks", function(request, response) {
    response.send("<h1>Student Marks</h1>");
});

app.use("/students", router);

app.listen(3002, function() {
    console.log("Server is running at http://localhost:3002");
});