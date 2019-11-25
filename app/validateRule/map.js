module.exports = {
  get: {
    '/api/v1/map/:id': {
      id: 'id',
    },
  },
  post: {
    '/api/v1/map': {
      config: 'object',
    },
  },
  put: {
    '/api/v1/map/:id': {
      id: 'id',
      config: 'object',
    },
  },
  delete: {
    '/api/v1/map/:id': {
      id: 'id',
    },
  },
};
