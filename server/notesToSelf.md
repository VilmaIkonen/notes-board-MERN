##App uses
Materil UI
Nodemon
Mongoose
Node 
React
Redux

#Controllers folder:
Folder structure for backend applications --> scalability

#Models folder
Mongoose model for all posts

##HTTP status codes:
https://www.restapitutorial.com/httpstatuscodes.html

#Redux for all actions to backend
in src folders "actions" and "reducers". Both have posts.js files.
reducer folder has also index.js --> initialization of Redux

#To prevent CORS error: 
Client side package.json: After "private": "true" add: "proxy": "http://localhost:5000"