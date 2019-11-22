const validateRule = require('../validateRule');
const _ = require('lodash');

const QUERY_PARAMS_METHOD = ['GET', 'DELETE'];

module.exports = () => async function validateParams(ctx, next) {
  try {
    const { method, path } = ctx;
    const rule = _.get(validateRule, `[${method.toLowerCase()}][${path}]`);
    if (rule) {
      const params = QUERY_PARAMS_METHOD.includes(method)
        ? ctx.query
        : ctx.request.body;
      Object.assign(params, ctx.params);
      ctx.validate(rule, params);
    }
    await next();
  } catch (error) {
    ctx.logger.error(error);
    ctx.body = {
      code: 1,
      message: 'params validate failed',
      data: error.errors,
    };
  }
};
