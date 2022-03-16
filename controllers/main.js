const package = require('../package.json');
const environment = process.env.ENVIRONMENT;


exports.getMainMessage = (req, res, next) => {
    res.status(200).json({
        "message": "Welcome to App API!",
        "environment": environment,
        "appversion": package.version
    })
}