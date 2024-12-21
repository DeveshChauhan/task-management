// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
// const logger = require('./middleware/logger');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
// app.use(logger);

// Enable CORS for all routes
app.use(cors()); // This will allow all origins to access the API

// OR, to specify allowed origins:
// app.use(cors({
//   origin: 'http://localhost:3000' // Allow only your frontend app
// }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// hello world
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});