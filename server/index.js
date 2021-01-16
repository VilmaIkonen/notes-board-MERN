import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();

// Body parser for sending the requests
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

// Express middleware to connect to app. (starting path for all the routes in posts.js). 
app.use('/posts', postRoutes);

// Connect server application with database (db will be hosted in MDB cloud) --> https://www.mongodb.com/cloud/atlas
dotenv.config();
const CONNECTION_URL = process.env.MONGODB_URI;

// Heroku will use env.PORT when deployed there
const PORT = process.env.PORT || 5000;

// Connection to database
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running in port ${PORT}`)))
  .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);