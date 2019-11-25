module.exports = {
  get: {
    '/map/:id': {
      id: 'id',
    },
  },
  post: {
    '/map': {
      config: 'object',
    },
  },
  put: {
    '/map/:id': {
      id: 'id',
      config: 'object',
    },
  },
  delete: {
    '/map/:id': {
      id: 'id',
    },
  },
};
