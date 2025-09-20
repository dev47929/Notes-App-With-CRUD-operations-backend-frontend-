const PORT = 3000;
const express = require("express");
const cors = require("cors");
const notesRoutes = require('../routes/notesRouter')
const app = express();
const {connectToMongoDb} = require("./connection")

app.use(cors());
app.use(express.json());        
app.use("/api/notes" , notesRoutes) 

connectToMongoDb("mongodb://127.0.0.1:27017/notes").then(()=>{
  console.log("MongoDB connected")
}

)
app.listen(PORT , () =>{
  console.log("Server Started");
})  

