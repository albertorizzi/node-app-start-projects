const mainRoutes = require('./main');

module.exports = function (app) {
    app.use('/', mainRoutes);
};