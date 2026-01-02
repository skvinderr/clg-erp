const User = require('../models/User');

const seedUsers = async () => {
    try {
        const count = await User.count();
        if (count === 0) {
            console.log('Seeding users...');

            await User.create({
                name: 'Dr. Robert Langdon',
                email: 'admin@college.edu',
                password: 'password123',
                role: 'Admin',
                avatar: 'https://ui-avatars.com/api/?name=Robert+Langdon&background=0D8ABC&color=fff'
            });

            await User.create({
                name: 'Dr. Sarah Wilson',
                email: 'faculty@college.edu',
                password: 'password123',
                role: 'Faculty',
                avatar: 'https://ui-avatars.com/api/?name=Sarah+Wilson&background=10B981&color=fff'
            });

            await User.create({
                name: 'Aarav Sharma',
                email: 'student@college.edu',
                password: 'password123',
                role: 'Student',
                avatar: 'https://ui-avatars.com/api/?name=Aarav+Sharma&background=F59E0B&color=fff'
            });

            console.log('Users seeded successfully.');
        }
    } catch (err) {
        console.error('Error seeding users:', err);
    }
};

module.exports = seedUsers;
