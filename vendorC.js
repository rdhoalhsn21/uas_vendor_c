const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "vendorC.json");

console.log("Membaca:", filePath);

const raw = fs.readFileSync(filePath, "utf8");
console.log(JSON.parse(raw));
