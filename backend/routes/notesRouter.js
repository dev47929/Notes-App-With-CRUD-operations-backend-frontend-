const express = require("express");
const router = express.Router();
const {handleDeleteNotes , handleGetNotes , handlePostNotes ,handlePutNotes} = require("../controllers/notesControllers")

router.get("/" , handleGetNotes);
router.post("/" , handlePostNotes);
router.put("/:id" , handlePutNotes);
router.delete("/:id", handleDeleteNotes)

module.exports = router;
  


