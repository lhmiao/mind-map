module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const FriendRelation = app.model.define('friend_relation', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: INTEGER,
    friend_id: INTEGER,
  });

  FriendRelation.associate = () => {
    FriendRelation.belongsTo(app.model.User, {
      foreignKey: 'friend_id',
      targetKey: 'id',
      constraints: false,
      as: 'user_info',
    });
  };

  return FriendRelation;
};
