import * as express from 'express';
import * as logger from 'morgan';
// Create Express server
const app = express();

// TODO: Connect to database

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

// API Routes
// TODO: Split these into separate files
app.get('/', (req, res) => {
  res.send('Conversation Board Server is working!');
});

module.exports = app;
