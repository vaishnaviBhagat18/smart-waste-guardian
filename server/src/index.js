require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
const reportsRouter = require("./routes/reports");

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ Allow frontend (Vite on 5173) to talk to backend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Serve uploaded files (make sure uploads folder exists at project root)
app.use("/uploads", express.static(path.join(__dirname, '..', 'uploads')));

// ✅ API routes
app.use("/api/reports", reportsRouter);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
