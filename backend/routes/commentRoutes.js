import express from 'express';
import {
  addComment,
  getCommentsByPost,
  deleteComment,
} from '../controllers/commentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addComment);
router.get('/:postId', getCommentsByPost);
router.delete('/:id', protect, deleteComment);

export default router;
