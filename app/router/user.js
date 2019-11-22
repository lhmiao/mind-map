module.exports = app => {
  const { router, controller } = app;
  router.post('/user', controller.user.register);
  router.put('/user', controller.user.modifyUserInfo);
  router.post('/user/login', controller.user.login);
  router.get('/user/logout', controller.user.logout);
};
