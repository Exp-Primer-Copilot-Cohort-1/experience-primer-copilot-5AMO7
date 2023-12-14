// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create web server
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Route
app.get('/post/:id/comments', (req, res) => {
    res.send([
        { id: 1, author: 'John', content: 'Hello' },
        { id: 2, author: 'Jane', content: 'Hi' },
        { id: 3, author: 'Jack', content: 'Hey' }
    ]);
});

// Start server
app.listen(4001, () => {
    console.log('Listening on port 4001');
});
