import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// setup handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// public folder
app.use(express.static(path.join(__dirname, '../public')));

// mount routes
app.use('/', routes);

export default app;
