module.exports = {
  post: {
    '/api/v1/user': {
      username: { type: 'string', max: 50 },
      password: { type: 'string', max: 50 },
    },
    '/api/v1/user/login': {
      username: { type: 'string', max: 50 },
      password: { type: 'string', max: 50 },
    },
  },
  put: {
    '/api/v1/user': {
      username: { type: 'string', max: 50 },
      password: { type: 'string', max: 50 },
    },
  },
};
