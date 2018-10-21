import * as Sequelize from 'sequelize';
import * as pg from 'pg';
import * as fs from 'fs';

pg.defaults.ssl = true;
let config = {
  DATABASE_URI: undefined,
};

if (fs.existsSync('./config.json')) {
  // The difference between the behavior of `existsSync` and `require` is weird, but works for now.
  config = require('../config');
}

const database = new Sequelize(process.env.DATABASE_URI || config.DATABASE_URI, {
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    // idle: 10000,
  },
});

// Get config from disk

database.sync(
  // { force: true },
);

export { database };
