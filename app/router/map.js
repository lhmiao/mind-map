module.exports = app => {
  const { router, controller } = app;
  router.resources('/api/v1/map', controller.map);
};
