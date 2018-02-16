export const post = (sequelize, Sequelize) => {
  return sequelize.define('post', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: Sequelize.STRING(255),
    content: Sequelize.STRING(255),
    chatId: Sequelize.STRING(255),
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
  });
};
