import mongoose from 'mongoose';
import commentsSchema from './commenters.js';

const articleSchema = new mongoose.Schema({
        
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    comments: {
        type: [ commentsSchema ],
    },

});

// register the model
mongoose.model('article', articleSchema);