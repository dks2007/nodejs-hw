import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/noteId', (req, res) => {
  const { id_param } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${id_param}` });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${res.method}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
