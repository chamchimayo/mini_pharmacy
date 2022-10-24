require('dotenv').config();

const development = {
'username': process.env.DB_USERNAME,
'password': process.env.DB_PASSWORD,
'database': process.env.DB_NAME,
'host' : process.env.DB_END_POINT,
'dialect' : 'mysql'
};
const test = {
'username': process.env.DB_USERNAME,
'password': process.env.DB_PASSWORD,
'database': process.env.TEST_DB_NAME,
'host' : "127.0.0.1",
'dialect' : 'mysql'
};
const production = {
'username': 'root',
'password': null,
'database': 'database_production',
'host' : '127.0.0.1',
'dialect' : 'mysql'
};

module.exports = {development, test, production};