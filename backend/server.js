//Required external packages
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');

const PORT = process.env.PORT || 3000;
const connectDB = require("./config/connectDB");


connectDB();

app.use(cors()); // To allow Browsers to access our server
app.use(express.json());

app.use('/api',require('./routes/api'));
app.use('/',require('./routes/redirect'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});