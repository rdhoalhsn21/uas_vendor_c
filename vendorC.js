const fs = require("fs");

// Membaca file vendorC.json
const raw = fs.readFileSync("vendorC.json", "utf8");
const data = JSON.parse(raw);

console.log("=== Output Original Vendor C ===");
console.log(JSON.stringify(data, null, 2));
