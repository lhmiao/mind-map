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

  return FriendApply;
};
