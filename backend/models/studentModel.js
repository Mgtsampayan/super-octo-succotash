// Create a studentModel.js in vite react node mysql

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./utils/db');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/students', (req, res) => {
    const query = 'SELECT * FROM students';
    db.execute(query, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
});