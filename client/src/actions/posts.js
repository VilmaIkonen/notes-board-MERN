// "import * as" = import everything from actions as api
import * as api from '../api'

// Action Creators

// Getting async data --> Redux thunk: async(dispatch) 0 dispatch(action) 8insted of: return action)
export const getPosts = () =>  async (dispatch) => {

  try {
    const {data} = await api.fetchPosts();

    dispatch ({type: 'FETCH_ALL', payload: data}); // payload: data where posts are stored  
  }
  catch (error) {
    console.log(error.message);
  }
}
// from here: action dispatched from App.js useEffect --> posts.js (reducer): handle the logic of fetching all posts

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);

    dispatch({type: 'CREATE', payload: data});
  } 
  catch (error) {
    console.log(error);    
  }
}