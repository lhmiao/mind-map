module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const UserMapRelation = app.model.define('user_map_relation', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: INTEGER,
    map_id: INTEGER,
  });

  return UserMapRelation;
};
