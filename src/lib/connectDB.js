import mongoose from "mongoose";


export default async function connectDB() {
try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected 🎊");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}