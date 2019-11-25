const ms = require('ms');

exports.SUCCESS_CODE = 0;

exports.ERROR_CODE = 1;

exports.NEED_LOGIN_CODE = 2;

exports.NO_AUTH_CODE = 3;

exports.RES_BODY_KEYS = ['code', 'message', 'data'];

exports.LOGIN_COOKIE_MAX_AGE = ms('7d');
