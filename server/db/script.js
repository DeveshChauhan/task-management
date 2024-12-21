// Import dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb://admin:secret@localhost:27017/todoApp?authSource=admin');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Define Todo Schema and Model
const todoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

// Example: Add a new user and todo
async function createSampleData() {
    try {

        const password = await bcrypt.hash('password123', 10);
        // Create a user
        const user = new User({
            username: 'johndoe',
            email: 'johndoe@example.com',
            password,
        });

        await user.save();
        console.log('User created:', user);

        // Create a todo for the user
        const todo = new Todo({
            userId: user._id,
            title: 'Learn MongoDB',
            description: 'Understand how to use MongoDB with Mongoose',
        });

        await todo.save();
        console.log('Todo created:', todo);
    } catch (error) {
        console.error('Error creating sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

// Run the script
createSampleData();
