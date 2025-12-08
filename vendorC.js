const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "vendorC.json");

console.log("Membaca:", filePath);
console.log(JSON.parse(fs.readFileSync(filePath, "utf8")));
