import mongoose from 'mongoose';

// Mongoose schemas for making each post similar.
// SelectedFile: Convert image to string using base64
const postSchema = mongoose.Schema(
    {
      title: String,
      message: String,
      creator: String,
      tags: [String],
      selectedFile: String,
      likeCount: {
        type: Number,
        default: 0
      },
      createdAt: {
        type: Date,
        default: new Date()
      }
    }
  );

// Schema into a model:
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
