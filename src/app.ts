import * as cors from 'cors';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import * as apiController from './controllers/api';

// Create Express server
const app = express();

// TODO: Connect to database

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(cors()); // TODO: Remove this. Or at least restrict it as much as possible.
app.use(bodyParser.json());

// API Routes
// TODO: Split these into separate files
app.get('/api/user/:id', apiController.getUser);
app.get('/api/board/:id', apiController.getBoard);
app.get('/api/board/:id/posts', apiController.getPosts);

module.exports = app;
