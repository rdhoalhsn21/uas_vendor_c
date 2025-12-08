const fs = require("fs");
const path = require("path"); // WAJIB untuk Vercel

// Fungsi utama Vercel Serverless
module.exports = (req, res) => {
    try {
        // Tentukan path relatif ke DATA/vendorC.json
        const dataPath = path.join(__dirname, '..', 'data', 'vendorC.json'); 
        
        // Baca dan parse data
        const raw = fs.readFileSync(dataPath, "utf8");
        const data = JSON.parse(raw); 

        // Logika Normalisasi (Logika Anda yang sudah Benar)
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

        // Kirim Respons JSON (dengan status 200 OK)
        res.status(200).json(finalData);
        
    } catch (error) {
        // Penanganan error
        res.status(500).json({ error: "Gagal memproses data Vendor C. Pastikan file data/vendorC.json ada." });
    }
};