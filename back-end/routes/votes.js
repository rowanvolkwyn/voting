const express = require('express');
const router = express.Router();
const { getVotes, getVote, submitVote, deleteVote } = require('../controllers/voteController');

// GET all votes
router.get('/', getVotes);

// GET all votes
router.get('/:id', getVote);

// POST a new vote
router.post('/', submitVote);

// DELETE a vote
router.delete('/:id', deleteVote);

module.exports = router;