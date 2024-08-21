import mongoose from "mongoose";


export default async function connectDB() {
    
    try {
        const db = mongoose.connect(process.env.DB_URI);
        // console.log(db)
        console.log('Database connected 🎊');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}