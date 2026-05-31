import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.get('/notes', createNote);
router.get('/notes/:nodeId', deleteNote);
router.get('/notes/:noteId', updateNote);

export default router;
