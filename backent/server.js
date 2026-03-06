import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./module/Product.js"; // ✅ FIX 1: Add `.js` and correct model name

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 🔗 Connect MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend running for E-ZONE!");
});

// Subjects test route
app.get("/timetable", (req, res) => {

  const timetable = [
    { day: "Monday", subject: "Mathematics", time: "9:00 - 10:00" },
    { day: "Monday", subject: "Science", time: "10:00 - 11:00" },
    { day: "Tuesday", subject: "English", time: "9:00 - 10:00" },
    { day: "Wednesday", subject: "Computer Science", time: "11:00 - 12:00" },
    { day: "Thursday", subject: "Social Studies", time: "12:00 - 1:00" }
  ];

  res.json(timetable);

});

// ✅ FIX 2: Move routes **above app.listen()**
app.post("/add-product", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const newProduct = new Product({ name, price, description, image });
    await newProduct.save();
    res.json({ message: "✅ Product added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Error adding product" });
  }
});

// ✅ Optional: Add GET route to view products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching products" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 E-ZONE backend running on port ${PORT}`));
