const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const dataPath = path.join(__dirname, "..", "DATA", "vendorC.json");
    const raw = fs.readFileSync(dataPath, "utf8");
    const data = JSON.parse(raw);

    // PENTING → tidak ada perubahan data
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Gagal membaca data Vendor C",
      detail: error.message
    });
  }
};