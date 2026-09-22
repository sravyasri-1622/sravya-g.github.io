const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});