import * as Sequelize from 'sequelize';
import { database } from '../db';

export const Post = database.define('board', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: Sequelize.STRING(255),
  content: Sequelize.STRING(255),
  chatId: Sequelize.UUIDV4,
  date_created: Sequelize.DATE,
  date_updated: Sequelize.DATE,
}, {
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
  });

Post.sync();
