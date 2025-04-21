const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
});