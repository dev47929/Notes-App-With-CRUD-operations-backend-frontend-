const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  noteTitle :
  {
    type : String,
    required : true,
  }, 
  noteContent : {
    type : String , 
  },
})

const Note = mongoose.model("Note" , notesSchema)

module.exports = Note ;