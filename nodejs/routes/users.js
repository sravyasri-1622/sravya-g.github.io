const express = require("express");

const router = express.Router();

router.get("/", function(request, response) {
    response.send("<h1>Users Route</h1>");
});

module.exports = router;