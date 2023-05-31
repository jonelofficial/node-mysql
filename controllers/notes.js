import Notes from "../model/notes.js";

export const getNotes = async (req, res, next) => {
  try {
    const data = await Notes.getNotes();
    res.status(200).json({ message: "Success get all notes.", data: data });
  } catch (err) {
    next(err);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const id = req.params.noteId;
    const data = await Notes.getNote(id);
    if (data.length <= 0)
      return res.status(404).json({ message: "No item found." });
    res.status(200).json({ message: "Success get note.", data: data });
  } catch (err) {
    console.log("error:", err);
    next(err);
  }
};

export const createNote = async (req, res, next) => {
  try {
    const { title, contents } = req.body;
    await Notes.createNote(title, contents);

    res.status(201).json({ message: "Success creating note." });
  } catch (err) {
    next(err);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const id = req.params.noteId;
    const { title, contents } = req.body;

    const data = await Notes.updateNote(title, contents, id);
    if (data.length <= 0)
      return res.status(404).json({ message: "No item found." });
    res.status(200).json({ message: "Success update note.", data: data });
  } catch (err) {
    next(err);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const id = req.params.noteId;

    const data = await Notes.deleteNote(id);
    if (!data) return res.status(404).json({ message: "No item found." });
    res.status(200).json({ message: "Success delete note." });
  } catch (err) {
    next(err);
  }
};
