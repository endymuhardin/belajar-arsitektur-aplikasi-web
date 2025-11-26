import express from 'express';

import { engine } from 'express-handlebars';
import dayjs from "dayjs";

import path from 'path';
import { fileURLToPath } from 'url';

import routes from './routes/index.js';
import studentRoutes from "./routes/studentRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// setup handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'main',
  helpers: {
    eq: (a, b) => a === b, 
    formatDate(date) {
      if (!date) return "-";
      return dayjs(date).format("DD MMM YYYY");
    }
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// public folder
app.use(express.static(path.join(__dirname, '../public')));

// untuk parsing form input
app.use(express.urlencoded({ extended: true }));

// mount routes
app.use('/', routes);
app.use("/", studentRoutes);

export default app;
