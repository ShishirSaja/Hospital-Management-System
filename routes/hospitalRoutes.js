const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Human1@73',
    database: 'hospital_management'
});

// Route to Display Patients
router.get('/', (req, res) => {
    let query = 'SELECT * FROM patients';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { patients: results });
    });
});

// Route to Add Patient
router.post('/add-patient', (req, res) => {
    const { name, age, phone } = req.body;
    let query = `INSERT INTO patients (name, age, phone) VALUES ('${name}', '${age}', '${phone}')`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;
