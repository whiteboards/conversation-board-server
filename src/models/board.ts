const board = (sequelize, Sequelize) => {
  return sequelize.define('board', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: Sequelize.STRING(255),
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
  });
};

export = board;