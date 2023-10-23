const sequelize = require('sequelize');
require('dotenv').config();

const conn = new sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamps: false,
      },
});

module.exports = conn;
