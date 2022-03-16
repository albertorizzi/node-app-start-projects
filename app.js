const express = require('express');
const helmet = require('helmet');
const cors = require("cors")

const router = express.Router();
const db = require('./utils/database');

const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(helmet());


console.log(process.env.ENVIRONMENT)

//Routing
app.use('/', router);
require("./routes")(app);

app.listen(process.env.PORT || 8080);