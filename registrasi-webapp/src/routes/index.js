const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  res.send('Aplikasi Registrasi Bekerja!');
});

router.get('/test-db', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT NOW()');
    res.json({ message: 'Koneksi database berhasil', time: rows[0].now });
  } catch (err) {
    console.error('Error koneksi database', err);
    res.status(500).json({ message: 'Error koneksi database' });
  }
});

module.exports = router;
