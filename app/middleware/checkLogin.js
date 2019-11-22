const { NEED_LOGIN_CODE } = require('../constant');

module.exports = () => async function checkLogin(ctx, next) {
  const id = ctx.cookies.get('id');
  if (!id) {
    ctx.body = {
      code: NEED_LOGIN_CODE,
      message: 'need login',
      data: '',
    };
    return;
  }
  await next();
};
