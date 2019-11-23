module.exports = app => {
  const { router, controller } = app;
  router.get('/friend', controller.friend.getFriendList);
  router.delete('/friend/:friend_id', controller.friend.deleteFriend);
  router.get('/friend/apply', controller.friend.getApplyList);
  router.post('/friend/apply', controller.friend.applyFriend);
  router.post('/friend/agree', controller.friend.agreeFriendApply);
  router.delete('/friend/agree/:friend_id', controller.friend.disagreeFriendApply);
};
