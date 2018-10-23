import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';

// Internal imports
import * as  db from './db';
import * as apiController from './controllers/api';

// Create Express server
export const app = express();

db.database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    db.database.close();
  })
  .catch((err) => {
    console.log('Unable to connect to database.', err);
    db.database.close();
  });

// Express configuration
app.set('port', process.env.PORT || 3000);
app.locals.db = db;
app.use(logger('dev'));
app.use(cors()); // TODO: Remove this. Or at least restrict it as much as possible.
app.use(bodyParser.json());
app.use(helmet());

// API Routes
// TODO: Split these into separate files
app.get('/api/user/:id', apiController.getUser);
app.get('/api/board/:id', apiController.getBoard);
app.post('/api/board', apiController.createBoard);
app.get('/api/board/:id/posts', apiController.getPosts);
