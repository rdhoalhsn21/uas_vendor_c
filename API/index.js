const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    // Path ke JSON
    const jsonPath = path.join(__dirname, "..", "data", "vendorC.json");

    // Baca isi file
    const raw = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(raw);

    // Vendor C HARUS mengirim RAW (TANPA NORMALISASI)
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Gagal membaca data vendor C",
      message: error.message
    });
  }
};