const mongoose = require("mongoose");

async function connectToMongoDb(url){
  try{
    mongoose.connect(url);
    console.log("MongoDB connected successfully")
  }
  catch{
    
      console.log("error" , err)
    
  }
}
module.exports = {connectToMongoDb};