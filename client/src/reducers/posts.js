const reducer = (posts = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload; // action.payload = actual posts
    case 'CREATE':
      return [...posts, action.payload]; // spread existing posts and add a new one. New post is stored in action.payload
    default:
      return posts;
  }
}

export default reducer;
// const reducer = (state = [], action) {} 
// --> post reducer --> 'state' always 'post'