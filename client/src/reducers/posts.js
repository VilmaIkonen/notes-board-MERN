const reducer = (posts = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload; // action.payload = actual posts
    case 'CREATE':
      return [...posts, action.payload]; // spread existing posts and add a new one. New post is stored in action.payload
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload._id ? action.payload : post); // map(): goes through an array and returns the changed array. If post id = updated post id, then return newly updated post. If not, return post as it was, w/o updates
    default:
      return posts;
  }
}

export default reducer;
// const reducer = (state = [], action) {} 
// --> post reducer --> 'state' always 'post'