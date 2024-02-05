const mongoose = require('mongoose');

const connectDB = async ( req,res )=> {
    try {
        await mongoose.connect(
            process.env.DATABASE_URI
        )
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;