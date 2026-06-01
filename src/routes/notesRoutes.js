import { Router } from 'express';
import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/', getAllNotesSchema, getAllNotes);
router.get('/:noteId', noteIdSchema, getNoteById);
router.post('/', createNoteSchema, createNote);
router.patch('/:noteId', updateNoteSchema, updateNote);
router.delete('/:noteId', noteIdSchema, deleteNote);

export default router;
