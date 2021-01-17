// All the handlers for the routes
// Extract logic from the route functions (in posts.js) here, to keep posts.js simple and readable

import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

// Getting all posts currently in db, takes time --> 'async', 'await'
export const getPosts =  async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); 

    res.status(200).json(postMessages);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201). json(newPost);
  }
  catch (error) {
    res.status(409).json({ message: error.message });
  }
}

// Get post from route eg. /post/123
// rename id to _id
// update logic handled on client side on Form.js
export const updatePost = async (req, res) => {
  const {id: _id} = req.params;
  const post = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post found with id ${id}.`);

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true}); // spread old post and add the id property

  res.json(updatedPost);
}

// Delete post

export const deletePost = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post found with id ${id}.`);

  await PostMessage.findByIdAndRemove(id);

  res.json({message: 'Post deleted succesfully'})

}