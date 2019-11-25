const { LOGIN_COOKIE_MAX_AGE } = require('../app/constant');

module.exports = appInfo => {
  const keys = appInfo.name + '_1574341770283_8277';

  const middleware = ['processResBody', 'checkLogin', 'validateParams'];

  const userConfig = {};

  const session = {
    maxAge: LOGIN_COOKIE_MAX_AGE,
  };

  const checkLogin = {
    ignore: [ // 登录和注册接口不检测登录状态"
      '/api/v1/user/login',
      ({ path, method }) => (path === '/api/v1/user' && method === 'POST'),
    ],
  };

  return {
    ...userConfig,
    keys,
    middleware,
    session,
    checkLogin,
  };
};
