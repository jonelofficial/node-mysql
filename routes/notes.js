import {
  getNotes,
  getNote,
  updateNote,
  deleteNote,
  createNote,
} from "../controllers/notes.js";
import express from "express";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/note/:noteId", getNote);
router.post("/note", createNote);
router.put("/note/:noteId", updateNote);
router.delete("/note/:noteId", deleteNote);

export default router;
