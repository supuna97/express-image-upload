// const mysql = require('mysql2');
const sequelize = require('sequelize');

const conn = new sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = conn;
