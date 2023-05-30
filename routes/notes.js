import {
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";
import express from "express";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/note/:noteId", getNote);
router.put("/note/:noteId", updateNote);
router.delete("/note/:noteId", deleteNote);

export default router;
