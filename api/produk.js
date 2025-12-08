const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    // path ke folder data (IMPORTANT: harus huruf kecil "data")
    const filePath = path.join(__dirname, "..", "data", "vendorC.json");

    // baca file
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw);

    // kirim RAW tanpa modifikasi
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Gagal membaca data vendor C",
      message: error.message
    });
  }
};
