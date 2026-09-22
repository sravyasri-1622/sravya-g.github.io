const express = require("express");

const router = express.Router();

router.get("/", function(request, response) {
    response.send("<h1>Student Route</h1><p>Welcome to Student Page.</p>");
});

router.get("/details", function(request, response) {
    response.json({
        name: "Sravya",
        course: "BTech"
    });
});

module.exports = router;