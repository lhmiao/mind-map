module.exports = {
  post: {
    '/friend/apply': {
      friend_id: 'id',
    },
    '/friend/agree': {
      friend_id: 'id',
    },
  },
  delete: {
    '/friend/:friend_id': {
      friend_id: 'id',
    },
    '/friend/agree/:friend_id': {
      friend_id: 'id',
    },
  },
};
