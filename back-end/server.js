require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const voteRoutes = require('./routes/votes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/vote', voteRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}}`)
});

