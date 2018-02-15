import * as Sequelize from 'sequelize';
import * as pg from 'pg';
import * as fs from 'fs';
import * as board from './models/board';
import * as post from './models/post';
import * as user from './models/user';

pg.defaults.ssl = true;
let config = {
  DATABASE_URL: undefined,
};

if (fs.existsSync('../config.js')) {
  config = require('../config');
}

const sequelize = new Sequelize(process.env.DATABASE_URL || config.DATABASE_URL, {
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
// Get config from disk
const db = {
  db: {
    Sequelize,
    sequelize,
    board,
    post,
    user,
  }
};

db.db.sequelize.sync(/*{ force: true }*/)

export = db;
