/* eslint valid-jsdoc: "off" */

module.exports = appInfo => {
  const keys = appInfo.name + '_1574341770283_8277';

  const middleware = [];

  const userConfig = {};

  const sequelize = {
    dialect: 'mysql',
    database: 'mind_map',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  };

  return {
    keys,
    middleware,
    sequelize,
    ...userConfig,
  };
};
