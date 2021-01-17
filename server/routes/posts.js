import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

// Routes

// All routes in posts.js are reached via localhost:5000/posts, not localhost:5000/, as the prefix of posts is set in index.js to '/posts
router.get('/', getPosts); 

router.post('/', createPost);

// For modifying existing post:
router.patch('/:id', updatePost);

// Like (similar to updating. Here the no. of likes is updated):
router.patch('/:id/likePost', likePost);

// For deleting a post:
router.delete('/:id', deletePost)


export default router;