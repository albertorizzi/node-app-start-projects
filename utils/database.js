const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

mongoose.connect(
    url,
    {
        useNewUrlParser: true
    }
);

mongoose.connection.once('open', _ => {
    console.log('Database connected')
})

mongoose.connection.on('error', err => {
    console.error('connection error:', err)
})

module.exports = mongoose.connection;