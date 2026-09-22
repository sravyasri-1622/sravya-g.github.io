const fs = require("fs");

try {

    const data = fs.readFileSync("unknown.txt", "utf8");

    console.log(data);

} catch (error) {

    console.log("Error occurred.");
    console.log("File not found.");
}