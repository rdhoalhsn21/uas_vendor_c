<<<<<<< HEAD
const fs = require("fs");

const raw = fs.readFileSync("vendorC.json", "utf8");
const data = JSON.parse(raw);

const finalData = data.map(item => {
  const hargaFinal = item.pricing.base_price + item.pricing.tax;

  let namaFinal = item.details.name;
  if (item.details.category === "Food") {
    namaFinal += " (Recommended)";
  }

  return {
    id: String(item.id),
    nama: namaFinal,
    harga_final: hargaFinal,
    status: item.stock > 0 ? "Tersedia" : "Habis",
    sumber: "Vendor C"
  };
});

console.log("=== Output Normalisasi Vendor C ===");
console.log(JSON.stringify(finalData, null, 2));
=======
const fs = require("fs");

const raw = fs.readFileSync("vendorC.json", "utf8");
const data = JSON.parse(raw);

const finalData = data.map(item => {
  const hargaFinal = item.pricing.base_price + item.pricing.tax;

  let namaFinal = item.details.name;
  if (item.details.category === "Food") {
    namaFinal += " (Recommended)";
  }

  return {
    id: String(item.id),
    nama: namaFinal,
    harga_final: hargaFinal,
    status: item.stock > 0 ? "Tersedia" : "Habis",
    sumber: "Vendor C"
  };
});

console.log("=== Output Normalisasi Vendor C ===");
console.log(JSON.stringify(finalData, null, 2));
>>>>>>> 5edc6a4b23b4647dd4a3aff87bf7ca173fb6a081
