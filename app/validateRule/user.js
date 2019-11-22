module.exports = {
  post: {
    '/user': {
      username: { type: 'string', max: 50 },
      password: { type: 'string', max: 50 },
    },
    '/user/login': {
      username: { type: 'string', max: 50 },
      password: { type: 'string', max: 50 },
    },
  },
  put: {
    '/user': {
      username: { type: 'string', max: 50 },
      password: { type: 'string', max: 50 },
    },
  },
};
