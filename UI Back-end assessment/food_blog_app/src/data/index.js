import mongoose from 'mongoose';

import '../models/comment.js';

const connectionStr = `mongodb://localhost:27017/food_blog_app`;
mongoose.connect(connectionStr)
    .then(() => {
        console.log('connected to database');
    })
    .catch(err => {
        console.log(err.message);
    })
