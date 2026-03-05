import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DATALINK_ENV === 'development' ? process.env.BUDGERCLIENT_SCHEMA_DEV : process.env.BUDGERCLIENT_SCHEMA_PROD
    });
};

export default connectDB;
