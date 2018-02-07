import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as pg from 'pg';
import * as Sequelize from 'sequelize';

import * as fs from 'fs';

// Get config from disk
let config = {
  DATABASE_URL: undefined,
};

// Yes, these don't match.
// Yes, it is stupid.
// Yes, it works (If you use the start script from the root dir)
if (fs.existsSync('./config.js')) {
  config = require('../config');
}

// Internal imports
import * as apiController from './controllers/api';

pg.defaults.ssl = true;

// Create Express server
const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL || config.DATABASE_URL, {
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(cors()); // TODO: Remove this. Or at least restrict it as much as possible.
app.use(bodyParser.json());
app.use(helmet);

// API Routes
// TODO: Split these into separate files
app.get('/api/user/:id', apiController.getUser);
app.get('/api/board/:id', apiController.getBoard);
app.get('/api/board/:id/posts', apiController.getPosts);

module.exports = app;
