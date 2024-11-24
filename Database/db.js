const mongoose=require('mongoose');



const mongo_url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2";
 const connectToDb=async()=>{
        try {

            await mongoose.connect(mongo_url);
            console.log("connected to db");
        } catch (error) {
            console.log(error);
        }
        
}
module.exports=connectToDb;