module.exports = app => {
  const { router, controller } = app;
  router.get('/friend', controller.friend.getFriendList);
  router.delete('friend', controller.friend.deleteFriend);
  router.post('/friend/apply', controller.friend.applyFriend);
  router.post('/friend/agree', controller.friend.agreeFriendApply);
};
