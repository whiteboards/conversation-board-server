export const board = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: Sequelize.STRING(255),
    displayname: Sequelize.STRING(255),
    email: Sequelize.STRING(255),
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
  });
}
