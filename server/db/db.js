import mongoose from "mongoose";

async function connectToMongoDB (){
    try{
        await mongoose.connect("mongodb+srv://karthik:karthik@database.ecilq.mongodb.net/?retryWrites=true&w=majority&appName=DataBase");
        console.log("Connected to mongoDB")
    }
    catch(error){
        console.log("Error connecting to MongoDB", error.message);
    }
}
export default connectToMongoDB;