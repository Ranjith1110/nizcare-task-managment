
import mongoose from "mongoose";

const connectDB = async () =>{
    
    try{
        const con = await mongoose.connect("mongodb+srv://MyFirstDatabase:12345@nizcare-task-management.m48pc.mongodb.net/")
        console.log("Database Connected");
    } catch(err){
        console.log(`Error - ${err}`);
        process.exit(1); 
        
    }

}

export default connectDB;