import * as Sequelize from 'sequelize';
import { database } from '../db';

export const User = database.define('board', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: Sequelize.STRING(255),
  displayname: Sequelize.STRING(255),
  email: {
    type: Sequelize.STRING(255),
    validate: {
      isEmail: true,
    },
  },
  date_created: Sequelize.DATE,
  date_updated: Sequelize.DATE,
}, {
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
  });

User.sync();
