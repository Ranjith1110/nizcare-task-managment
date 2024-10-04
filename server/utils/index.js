import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);

        console.log("DB connection established");
    } catch (error) {
        console.log("DB Error: " + error);
    }
};

export default dbConnection;