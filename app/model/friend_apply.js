module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const FriendApply = app.model.define('friend_apply', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    from_id: INTEGER,
    to_id: INTEGER,
  });

  FriendApply.associate = () => {
    FriendApply.belongsTo(app.model.User, {
      foreignKey: 'from_id',
      targetKey: 'id',
      constraints: false,
      as: 'user_info',
    });
  };

  return FriendApply;
};
