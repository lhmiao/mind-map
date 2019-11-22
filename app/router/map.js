module.exports = app => {
  const { router, controller } = app;
  router.resources('/map', controller.map);
};
