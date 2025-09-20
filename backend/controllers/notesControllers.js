const Note = require('../models/notes')
const express = require("express")

async function handleGetNotes(req, res) {
  const notes = await Note.find({})
  return res.status(201).json({ notes });
}
async function handlePostNotes(req, res) {
  const body = req.body;
  await Note.create({
    noteTitle: body.noteTitle,
    noteContent: body.noteContent
  })
  res.json({ status: "Success" })

}
async function handlePutNotes(req, res) {

}
async function handleDeleteNotes(req, res) {
    const id  = req.params.id;
    const result = await Note.findByIdAndDelete(id)
    if (result) {
      return res.status(201).json({ status: "success" })
    } else return res.status(400).json({ status: "failed" })
  
}


module.exports = { handleDeleteNotes, handlePostNotes, handlePutNotes, handleGetNotes }