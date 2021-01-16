import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js'

const router = express.Router();

// Routes

// All routes in posts.js are reached via localhost:5000/posts, not localhost:5000/, as the prefix of posts is set in index.js to '/posts
router.get('/', getPosts); 

router.post('/', createPost);

// For modifying existing post:
router.patch('/:id', updatePost)

export default router;