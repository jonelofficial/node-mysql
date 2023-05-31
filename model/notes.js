import pool from "../database/index.js";

const Notes = {
  getNotes: async () => {
    const [result] = await pool.query("SELECT * FROM notes");
    return result;
  },
  getNote: async (id) => {
    const [result] = await pool.query(`SELECT * FROM notes WHERE id = ?`, [id]);
    return result;
  },
  createNote: async (title, contents) => {
    const [result] = await pool.query(
      `INSERT INTO notes (title, contents) VALUES (?,?)`,
      [title, contents]
    );
    return result;
  },
  updateNote: async (title, contents, id) => {
    await pool.query(`UPDATE notes SET title = ? , contents = ? WHERE id = ?`, [
      title,
      contents,
      id,
    ]);
    return await Notes.getNote(id);
  },
  deleteNote: async (id) => {
    const [result] = await pool.query(`DELETE FROM notes WHERE id = ?`, [id]);
    return result.affectedRows;
  },
};

export default Notes;
