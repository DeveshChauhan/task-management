const mongoose = require('mongoose');

// const uri = process.env.MONGODB_URI;
const uri = 'mongodb://admin:secret@172.18.0.2:27017/todoApp?authSource=admin';

// mongoose.set('debug', true);

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process if connection fails
    }
};

connectDB();

module.exports = mongoose;
