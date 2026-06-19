import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

