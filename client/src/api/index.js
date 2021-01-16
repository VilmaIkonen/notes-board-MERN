// Axios used for API calls

import axios from 'axios';

// url pointing to backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);



