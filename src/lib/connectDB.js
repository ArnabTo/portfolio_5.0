import mongoose from "mongoose";


export default async function connectDB() {

    try {
        const db = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected 🎊');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}