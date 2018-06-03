
module.exports = (app: any, passport: any) => {
    const apiController = require('../controllers/apiController')(passport);

    app.route('/').get(apiController.home_get);
    app.route('/api/login').post(apiController.login_post);
    app.route('/api/signup').post(apiController.signup_post);
    app.route('/api/logout').get(apiController.logout_get);

    /**
     * Testing routes
     * */
    app.route('/api/test/').get(apiController.isLoggedIn, apiController.test_get);
    app.route('/api/test/').post(apiController.test_post);
    app.route('/api/test/:id').delete(apiController.test_delete);
    app.route('/**').get(apiController.home_get);
};
