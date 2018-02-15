import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as db from './db';
// Internal imports
import * as apiController from './controllers/api';

// Create Express server
const app = express();


db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Express configuration
app.set('port', process.env.PORT || 3000);
app.locals.db = db;
app.use(logger('dev'));
app.use(cors()); // TODO: Remove this. Or at least restrict it as much as possible.
app.use(bodyParser.json());

// API Routes
// TODO: Split these into separate files
app.get('/api/user/:id', apiController.getUser);
app.get('/api/board/:id', apiController.getBoard);
app.get('/api/board/:id/posts', apiController.getPosts);

module.exports = app;
