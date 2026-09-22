const express = require("express");

const router = express.Router();

router.get("/", function(request, response) {
    response.send("<h1>Products Route</h1>");
});

module.exports = router;