import express from "express";
import notesRoutes from "./routes/notes.js";

const app = express();

app.use(express.json());

app.use(notesRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({ error: message, data: data });
});

app.listen(8080, () => {
  console.log("Server working");
});
