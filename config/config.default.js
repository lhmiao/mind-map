const { LOGIN_COOKIE_MAX_AGE } = require('../app/constant');

module.exports = appInfo => {
  const keys = appInfo.name + '_1574341770283_8277';

  const middleware = ['processResBody', 'checkLogin', 'validateParams'];

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

  const security = {
    csrf: { enable: false },
  };

  const session = {
    maxAge: LOGIN_COOKIE_MAX_AGE,
  };

  const checkLogin = {
    ignore: [ // 登录和注册接口不检测登录状态"
      '/user/login',
      ({ path, method }) => (path === '/user' && method === 'POST'),
    ],
  };

  return {
    ...userConfig,
    keys,
    middleware,
    sequelize,
    security,
    session,
    checkLogin,
  };
};
