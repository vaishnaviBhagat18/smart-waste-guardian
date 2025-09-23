const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const pool = require('../db/pool')

const uploadDir = path.join(__dirname, '..', '..', 'uploads')
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})
const upload = multer({ storage })

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      console.error("⚠️ No file received");
      return res.status(400).json({ error: "No image uploaded" });
    }

    const { latitude = 0, longitude = 0, description = '' } = req.body;
    const imagePath = '/uploads/' + req.file.filename;

    const [result] = await pool.query(
      'INSERT INTO reports (description, image_path, latitude, longitude) VALUES (?,?,?,?)',
      [description, imagePath, latitude, longitude]
    );

    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error("Report upload failed:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;