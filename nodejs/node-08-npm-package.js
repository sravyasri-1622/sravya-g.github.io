const figlet = require("figlet");

figlet("Node JS", function(error, result) {

    if (error) {
        console.log(error);
        return;
    }

    console.log(result);
});