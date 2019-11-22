module.exports = app => {
  const { INTEGER, BLOB, DATE } = app.Sequelize;

  const MapModel = app.model.define('map', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    file_blob: {
      type: BLOB,
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
  });

  return MapModel;
};
