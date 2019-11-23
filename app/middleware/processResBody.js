const { SUCCESS_CODE, RES_BODY_KEYS } = require('../constant');

module.exports = () => async function processResBody(ctx, next) {
  await next();
  if (ctx.body === undefined) return; // 未匹配的请求直接放过
  const keys = Object.keys(ctx.body);
  const needProcess = !RES_BODY_KEYS.every(key => keys.includes(key));
  if (needProcess) {
    const data = ctx.body;
    ctx.body = {
      code: SUCCESS_CODE,
      message: 'success',
      data,
    };
  }
};
