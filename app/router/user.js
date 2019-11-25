module.exports = app => {
  const { router, controller } = app;
  router.post('/api/v1/user', controller.user.register);
  router.put('/api/v1/user', controller.user.modifyUserInfo);
  router.post('/api/v1/user/login', controller.user.login);
  router.get('/api/v1/user/logout', controller.user.logout);
};
