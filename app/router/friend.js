module.exports = app => {
  const { router, controller } = app;
  router.get('/api/v1/friend', controller.friend.getFriendList);
  router.delete('/api/v1/friend', controller.friend.deleteFriend);
  router.get('/api/v1/friend/apply', controller.friend.getApplyList);
  router.post('/api/v1/friend/apply', controller.friend.applyFriend);
  router.post('/api/v1/friend/apply/agree', controller.friend.agreeFriendApply);
  router.delete('/api/v1/friend/apply/agree', controller.friend.disagreeFriendApply);
};
