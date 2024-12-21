const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb://admin:secret@localhost:27017/todoApp?authSource=admin';

// Connect to MongoDB
mongoose
    .connect(uri)
    .then(() => {
        console.log('Mongoose connected to MongoDB successfully');
        mongoose.connection.close(); // Close connection after success
    })
    .catch((err) => {
        console.error('Mongoose connection error:', err.message);
    });
