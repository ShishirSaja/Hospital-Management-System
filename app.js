const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const hospitalRoutes = require('./routes/hospitalRoutes');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set View Engine to EJS
app.set('view engine', 'ejs');

// Routes
app.use('/', hospitalRoutes);

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Human1@73',
    database: 'hospital_management'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Start Server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});