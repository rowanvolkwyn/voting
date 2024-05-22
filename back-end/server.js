require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Vote = require('./models/voteModel'); 
const voteRoutes = require('./routes/votes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/vote', voteRoutes);


// MongoDB
const mongoURI = 'mongodb://localhost:27017/lan_maps';

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
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

