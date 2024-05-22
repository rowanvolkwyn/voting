const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mwVotes: {
        type: Array,
        required: true
    },
    mw2Votes: {
        type: Array,
        required: true
    },
    mw3Votes: {
        type: Array,
        required: true
    },
    boVotes: {
        type: Array,
        required: true
    },
    bo2Votes: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Vote', voteSchema);