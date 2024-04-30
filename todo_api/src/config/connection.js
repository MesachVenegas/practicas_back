const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    port: 5432,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    dialectOptions: { ssl: {require: true, rejectUnauthorized: false }}
})

module.exports = db;