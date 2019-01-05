
export default (router) => {
  router
    .get('root', '/', async (ctx) => {
      ctx.render('pages/index');
    });
};
