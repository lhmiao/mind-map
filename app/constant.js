const ms = require('ms');

exports.SUCCESS_CODE = 0; // 成功响应代码

exports.ERROR_CODE = 1; // 错误响应代码

exports.NEED_LOGIN_CODE = 2; // 未登录响应代码

exports.NO_AUTH_CODE = 3; // 无权限响应代码

exports.RES_BODY_KEYS = ['code', 'message', 'data']; // 响应 body 结构属性

exports.LOGIN_COOKIE_MAX_AGE = ms('7d'); // 登录 cookie 有效期（session 同）
