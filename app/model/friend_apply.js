module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const FriendApply = app.model.define('friend_apply', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    request_user_id: INTEGER,
    response_user_id: INTEGER,
  });

  return FriendApply;
};
