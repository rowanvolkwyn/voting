const Vote = require('../models/voteModel');
const mongoose = require('mongoose');

const getVotes = async (req, res) => {
    try {
        const votes = await Vote.find();
        res.status(200).json(votes);
    } catch (e) {
        res.status(500).json({msg: 'Error fetching votes'});
    }
};

const getVote = async (req, res) => {
    const { id } = req.params;

    try {
        const vote = await Vote.findById(id);
        res.status(200).json(vote);
    } catch (e) {
        res.status(400).json({msg: 'Error fetching vote'});
    }
}

const deleteVote = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedVote = await Vote.findByIdAndDelete(id);
        res.status(200).json(deletedVote);
    } catch (e) {
        res.status(500).json({msg: 'Error deleting vote'});
    }
}

const submitVote = async (req, res) => {
    const { name, votes } = req.body;
    console.log('Recieved vote:', req.body);

    const newVote = new Vote({
        name,
        votes
    });

    try {
        const savedVote = await Vote.create(newVote);
        res.status(200).json(savedVote);
    } catch (e) {
        res.status(500).json({msg: 'Error saving vote'});
    }
};

module.exports = {
    getVotes,
    getVote,
    submitVote,
    deleteVote
}