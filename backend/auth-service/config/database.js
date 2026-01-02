const { Sequelize } = require('sequelize');
require('dotenv').config();

// Check for DATABASE_URL (standard for cloud providers like Neon/Render/Heroku)
const databaseUrl = process.env.DATABASE_URL;

const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Required for some cloud DBs like Neon
      }
    },
    logging: false
  })
  : new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
  });

module.exports = sequelize;
