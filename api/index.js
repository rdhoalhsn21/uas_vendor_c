const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const jsonPath = path.join(__dirname, "..", "data", "vendorC.json");

    const raw = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(raw);

    // Vendor C mengirim RAW
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Gagal membaca data vendor C",
      message: error.message
    });
  }
};
