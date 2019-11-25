module.exports = app => {
  const { INTEGER, DATE, JSON: JSON_TYPE } = app.Sequelize;

  const MapModel = app.model.define('map', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    config: {
      type: JSON_TYPE,
      allowNull: false,
    },
    created_at: {
      type: DATE,
      allowNull: false,
    },
    updated_at: {
      type: DATE,
      allowNull: true,
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
    },
  });

  MapModel.associate = () => {
    MapModel.belongsTo(app.model.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
      constraints: false,
      as: 'owner',
    });
  };

  return MapModel;
};
