module.exports = {
  post: {
    '/api/v1/friend/apply': {
      friend_id: 'id',
    },
    '/api/v1/friend/agree': {
      friend_id: 'id',
    },
  },
  delete: {
    '/api/v1/friend/:friend_id': {
      friend_id: 'id',
    },
    '/api/v1/friend/agree/:friend_id': {
      friend_id: 'id',
    },
  },
};
