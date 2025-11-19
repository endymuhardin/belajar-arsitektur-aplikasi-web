require('dotenv').config();

const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
