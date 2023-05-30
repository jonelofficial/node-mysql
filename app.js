import express from "express";
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke in the server😢!");
});

app.listen(8080, () => {
  console.log("Server working");
});
