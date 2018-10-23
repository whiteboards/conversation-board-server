import * as SequelizeStatic from 'sequelize';
import { database } from '../db';

// These interfaces allow us to get easily workable types off of database
// access functions like `.create()` or `.findByID()`.

// I'm not super thrilled with them yet as it duplicates the data from
// `shared.d.ts`, only adding the optional callouts. Then again, we do
// need to make those callouts and we can't really do them over in the
// declaration file.

// I used to have these in a separate file, but it looks like we'll need
// a pair of these for every model we create, so I just moved them in here.
export interface IBoardAttributes {
  id?: string;
  name: string;
  date_created?: string;
  date_updated?: string;
}

export interface IBoardInstance extends SequelizeStatic.Instance<IBoardAttributes> {
  dataValues: IBoardAttributes;
}

// Create the model while implementing the above interfaces to provide full
// typing where the model is used.
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
    // Gives us timestamps, but with a custom field name.
    timestamps: true,
  createdAt: 'date_created',
  updatedAt: 'date_updated',
});

// Not sure if this is the best spot for this, but it seems to be working.
Board.sync();
