const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    boVotes: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Vote', voteSchema);