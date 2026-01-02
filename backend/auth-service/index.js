const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

const seedUsers = require('./seeders/userSeeder');

// Database Sync
sequelize.sync()
    .then(async () => {
        console.log('Database synced');
        await seedUsers();
    })
    .catch(err => console.log('Error syncing database:', err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});

module.exports = app;
