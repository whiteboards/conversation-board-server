import * as SequelizeStatic from 'sequelize';
import { IBoardInstance, IBoardAttributes } from './DatabaseInterfaces.d';
import { database } from '../db';

export const Board: SequelizeStatic.Model<IBoardInstance, IBoardAttributes> = database.define('board', {
  id: {
    type: SequelizeStatic.UUID,
    defaultValue: SequelizeStatic.UUIDV4,
    primaryKey: true,
  },
  name: SequelizeStatic.STRING(255),
  date_created: SequelizeStatic.DATE,
  date_updated: SequelizeStatic.DATE,
}, {
  timestamps: true,
  createdAt: 'date_created',
  updatedAt: 'date_updated',
});

Board.sync();
