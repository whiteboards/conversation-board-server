import { Instance } from "sequelize";

export interface IBoardAttributes {
  id?: string;
  name: string;
  date_created?: string;
  date_updated?: string;
}

export interface IBoardInstance extends Instance<IBoardAttributes> {
  dataValues: IBoardAttributes;
}