import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({

    commenter: {
        type: String,
        required: true,

    },
    title: {
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export default commentsSchema;