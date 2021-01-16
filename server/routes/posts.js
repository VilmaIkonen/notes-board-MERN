import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// Routes
router.get('/', getPosts); // All routes in posts.js are reached via localhost:5000/posts, not localhost:5000/, as the prefix of posts is set in index.js to '/posts
router.post('/', createPost);

export default router;