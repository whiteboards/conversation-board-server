import * as cors from 'cors';
import * as express from 'express';
import * as logger from 'morgan';

// Create Express server
const app = express();

// TODO: Connect to database

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(cors()); // TODO: Remove this. Or at least restrict it as much as possible.

// API Routes
// TODO: Split these into separate files
app.get('/', (req, res) => {
  res.send('Conversation Board Server is working!');
});

module.exports = app;
