export const students = [
    {
        id: 'STU001',
        name: 'Aarav Sharma',
        rollNumber: 'CS21001',
        email: 'aarav.sharma@college.edu',
        phone: '+91 98765 43210',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
        branch: 'Computer Science',
        semester: 6,
        section: 'A',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-05-15',
        bloodGroup: 'O+',
        category: 'General',
        guardian: {
            name: 'Rajesh Sharma',
            relation: 'Father',
            phone: '+91 98765 43211',
            email: 'rajesh.sharma@email.com'
        },
        address: {
            street: '123, Gandhi Nagar',
            city: 'Mumbai',
            state: 'Maharashtra',
            zip: '400001'
        },
        academics: {
            cgpa: 8.8,
            backlogs: 0,
            attendance: 92,
            creditsEarned: 120,
            previousSemesters: [
                { sem: 1, sgpa: 8.5 },
                { sem: 2, sgpa: 8.7 },
                { sem: 3, sgpa: 8.9 },
                { sem: 4, sgpa: 8.6 },
                { sem: 5, sgpa: 9.1 }
            ]
        },
        fees: {
            status: 'Paid',
            amount: 150000,
            due: 0
        },
        health: {
            bloodGroup: 'O+',
            height: '175 cm',
            weight: '70 kg',
            allergies: 'Peanuts',
            conditions: 'None',
            emergencyContact: '+91 98765 43211'
        },
        scholarship: {
            eligible: true,
            name: 'Merit Scholarship 2024',
            amount: 25000,
            status: 'Approved'
        },
        library: {
            booksIssued: 2,
            books: [
                { title: 'Introduction to Algorithms', due: '2024-05-15', status: 'Overdue' },
                { title: 'Clean Code', due: '2024-05-20', status: 'Active' }
            ]
        },
        exams: [
            { subject: 'Advanced Algorithms', date: '2024-06-01', time: '10:00 AM', room: 'LH-101' },
            { subject: 'Database Systems', date: '2024-06-03', time: '10:00 AM', room: 'LH-102' },
            { subject: 'Computer Networks', date: '2024-06-05', time: '02:00 PM', room: 'LH-103' }
        ]
    },
    {
        id: 'STU002',
        name: 'Isha Patel',
        rollNumber: 'CS21002',
        email: 'isha.patel@college.edu',
        phone: '+91 98765 43212',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        branch: 'Computer Science',
        semester: 6,
        section: 'A',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-08-22',
        bloodGroup: 'B+',
        category: 'OBC',
        guardian: {
            name: 'Suresh Patel',
            relation: 'Father',
            phone: '+91 98765 43213',
            email: 'suresh.patel@email.com'
        },
        address: {
            street: '45, Nehru Road',
            city: 'Ahmedabad',
            state: 'Gujarat',
            zip: '380001'
        },
        academics: {
            cgpa: 9.2,
            backlogs: 0,
            attendance: 95,
            creditsEarned: 120
        },
        fees: {
            status: 'Pending',
            amount: 150000,
            due: 50000
        }
    },
    {
        id: 'STU003',
        name: 'Rohan Gupta',
        rollNumber: 'ME21001',
        email: 'rohan.gupta@college.edu',
        phone: '+91 98765 43214',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        branch: 'Mechanical',
        semester: 6,
        section: 'B',
        batch: '2021-2025',
        status: 'Probation',
        dob: '2002-11-10',
        bloodGroup: 'A-',
        category: 'General',
        guardian: {
            name: 'Amit Gupta',
            relation: 'Father',
            phone: '+91 98765 43215',
            email: 'amit.gupta@email.com'
        },
        address: {
            street: '78, Civil Lines',
            city: 'Delhi',
            state: 'Delhi',
            zip: '110001'
        },
        academics: {
            cgpa: 6.5,
            backlogs: 2,
            attendance: 68,
            creditsEarned: 108
        },
        fees: {
            status: 'Paid',
            amount: 140000,
            due: 0
        }
    },
    {
        id: 'STU004',
        name: 'Ananya Singh',
        rollNumber: 'EC21001',
        email: 'ananya.singh@college.edu',
        phone: '+91 98765 43216',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        branch: 'Electronics',
        semester: 6,
        section: 'A',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-02-28',
        bloodGroup: 'AB+',
        category: 'EWS',
        guardian: {
            name: 'Vikram Singh',
            relation: 'Father',
            phone: '+91 98765 43217',
            email: 'vikram.singh@email.com'
        },
        address: {
            street: '12, Park Street',
            city: 'Kolkata',
            state: 'West Bengal',
            zip: '700001'
        },
        academics: {
            cgpa: 8.5,
            backlogs: 0,
            attendance: 88,
            creditsEarned: 120
        },
        fees: {
            status: 'Paid',
            amount: 145000,
            due: 0
        }
    },
    {
        id: 'STU005',
        name: 'Arjun Reddy',
        rollNumber: 'CS21003',
        email: 'arjun.reddy@college.edu',
        phone: '+91 98765 43218',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        branch: 'Computer Science',
        semester: 6,
        section: 'B',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-07-12',
        bloodGroup: 'O-',
        category: 'General',
        guardian: {
            name: 'Prakash Reddy',
            relation: 'Father',
            phone: '+91 98765 43219',
            email: 'prakash.reddy@email.com'
        },
        address: {
            street: '99, Jubilee Hills',
            city: 'Hyderabad',
            state: 'Telangana',
            zip: '500001'
        },
        academics: {
            cgpa: 7.8,
            backlogs: 0,
            attendance: 75,
            creditsEarned: 120
        },
        fees: {
            status: 'Overdue',
            amount: 150000,
            due: 75000
        }
    },
    {
        id: 'STU006',
        name: 'Meera Nair',
        rollNumber: 'CE21001',
        email: 'meera.nair@college.edu',
        phone: '+91 98765 43220',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        branch: 'Civil',
        semester: 6,
        section: 'A',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-09-05',
        bloodGroup: 'B-',
        category: 'General',
        guardian: {
            name: 'Mohan Nair',
            relation: 'Father',
            phone: '+91 98765 43221',
            email: 'mohan.nair@email.com'
        },
        address: {
            street: '33, MG Road',
            city: 'Kochi',
            state: 'Kerala',
            zip: '682001'
        },
        academics: {
            cgpa: 8.9,
            backlogs: 0,
            attendance: 91,
            creditsEarned: 120
        },
        fees: {
            status: 'Paid',
            amount: 135000,
            due: 0
        }
    },
    {
        id: 'STU007',
        name: 'Kabir Das',
        rollNumber: 'ME21002',
        email: 'kabir.das@college.edu',
        phone: '+91 98765 43222',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
        branch: 'Mechanical',
        semester: 6,
        section: 'A',
        batch: '2021-2025',
        status: 'Inactive',
        dob: '2002-12-25',
        bloodGroup: 'A+',
        category: 'SC',
        guardian: {
            name: 'Ramesh Das',
            relation: 'Father',
            phone: '+91 98765 43223',
            email: 'ramesh.das@email.com'
        },
        address: {
            street: '56, Station Road',
            city: 'Varanasi',
            state: 'Uttar Pradesh',
            zip: '221001'
        },
        academics: {
            cgpa: 7.2,
            backlogs: 1,
            attendance: 60,
            creditsEarned: 110
        },
        fees: {
            status: 'Paid',
            amount: 140000,
            due: 0
        }
    },
    {
        id: 'STU008',
        name: 'Zara Khan',
        rollNumber: 'EC21002',
        email: 'zara.khan@college.edu',
        phone: '+91 98765 43224',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
        branch: 'Electronics',
        semester: 6,
        section: 'B',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-04-18',
        bloodGroup: 'O+',
        category: 'General',
        guardian: {
            name: 'Salim Khan',
            relation: 'Father',
            phone: '+91 98765 43225',
            email: 'salim.khan@email.com'
        },
        address: {
            street: '88, Residency Road',
            city: 'Bangalore',
            state: 'Karnataka',
            zip: '560001'
        },
        academics: {
            cgpa: 9.5,
            backlogs: 0,
            attendance: 98,
            creditsEarned: 120
        },
        fees: {
            status: 'Paid',
            amount: 145000,
            due: 0
        }
    },
    {
        id: 'STU009',
        name: 'David Fern',
        rollNumber: 'CS21004',
        email: 'david.fern@college.edu',
        phone: '+91 98765 43226',
        photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop',
        branch: 'Computer Science',
        semester: 6,
        section: 'C',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-06-30',
        bloodGroup: 'AB-',
        category: 'General',
        guardian: {
            name: 'John Fern',
            relation: 'Father',
            phone: '+91 98765 43227',
            email: 'john.fern@email.com'
        },
        address: {
            street: '21, Church Street',
            city: 'Goa',
            state: 'Goa',
            zip: '403001'
        },
        academics: {
            cgpa: 8.2,
            backlogs: 0,
            attendance: 85,
            creditsEarned: 120
        },
        fees: {
            status: 'Pending',
            amount: 150000,
            due: 25000
        }
    },
    {
        id: 'STU010',
        name: 'Priya Singh',
        rollNumber: 'CE21002',
        email: 'priya.singh@college.edu',
        phone: '+91 98765 43228',
        photo: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=150&h=150&fit=crop',
        branch: 'Civil',
        semester: 6,
        section: 'B',
        batch: '2021-2025',
        status: 'Active',
        dob: '2003-10-10',
        bloodGroup: 'B+',
        category: 'ST',
        guardian: {
            name: 'Vijay Singh',
            relation: 'Father',
            phone: '+91 98765 43229',
            email: 'vijay.singh@email.com'
        },
        address: {
            street: '67, Lake View',
            city: 'Udaipur',
            state: 'Rajasthan',
            zip: '313001'
        },
        academics: {
            cgpa: 7.9,
            backlogs: 0,
            attendance: 82,
            creditsEarned: 120
        },
        fees: {
            status: 'Paid',
            amount: 135000,
            due: 0
        }
    }
];

export const notices = [
    { id: 1, title: 'End Semester Exam Schedule Released', date: '2024-05-10', type: 'Exam' },
    { id: 2, title: 'Library Due Date Extension', date: '2024-05-08', type: 'General' },
    { id: 3, title: 'Annual Sports Day Registration', date: '2024-05-05', type: 'Event' }
];

export const faculty = [
    {
        id: 'FAC001',
        name: 'Dr. Rajesh Kumar',
        designation: 'Professor & HOD',
        department: 'Computer Science',
        specialization: 'Artificial Intelligence',
        email: 'rajesh.kumar@college.edu',
        phone: '+91 98765 11111',
        photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop',
        joinDate: '2015-06-15',
        qualifications: [
            { degree: 'Ph.D in CS', institute: 'IIT Bombay', year: 2014 },
            { degree: 'M.Tech in CS', institute: 'IIT Delhi', year: 2009 }
        ],
        experience: {
            teaching: 12,
            industry: 2
        },
        publications: [
            { title: 'AI in Healthcare', journal: 'IEEE Transactions', year: 2023 },
            { title: 'Machine Learning Optimizations', journal: 'Springer', year: 2022 }
        ],
        certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional Data Engineer'],
        memberships: ['IEEE Senior Member', 'ACM Professional Member'],
        salary: {
            basic: 150000,
            allowances: 50000,
            deductions: 15000,
            net: 185000
        },
        performance: {
            rating: 4.8,
            reviews: 150
        },
        schedule: [
            { day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'AI & ML', room: 'LH-101', type: 'Lecture' },
            { day: 'Tuesday', time: '02:00 PM - 04:00 PM', subject: 'Project Lab', room: 'LAB-1', type: 'Lab' }
        ]
    },
    {
        id: 'FAC002',
        name: 'Prof. Anita Desai',
        designation: 'Associate Professor',
        department: 'Electronics',
        specialization: 'VLSI Design',
        email: 'anita.desai@college.edu',
        phone: '+91 98765 11112',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
        joinDate: '2017-08-01',
        qualifications: [
            { degree: 'Ph.D in Electronics', institute: 'IISc Bangalore', year: 2016 },
            { degree: 'M.Tech in VLSI', institute: 'NIT Trichy', year: 2011 }
        ],
        experience: {
            teaching: 8,
            industry: 0
        },
        publications: [
            { title: 'Low Power VLSI Circuits', journal: 'IEEE Solid-State Circuits', year: 2021 }
        ],
        certifications: ['Cadence Certified Engineer'],
        memberships: ['IEEE Member'],
        salary: {
            basic: 120000,
            allowances: 40000,
            deductions: 12000,
            net: 148000
        },
        performance: {
            rating: 4.6,
            reviews: 120
        },
        schedule: [
            { day: 'Wednesday', time: '11:00 AM - 12:00 PM', subject: 'Digital Electronics', room: 'LH-201', type: 'Lecture' },
            { day: 'Thursday', time: '09:00 AM - 11:00 AM', subject: 'VLSI Lab', room: 'LAB-2', type: 'Lab' }
        ]
    },
    {
        id: 'FAC003',
        name: 'Dr. Suresh Menon',
        designation: 'Assistant Professor',
        department: 'Mechanical',
        specialization: 'Thermodynamics',
        email: 'suresh.menon@college.edu',
        phone: '+91 98765 11113',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        joinDate: '2019-01-10',
        qualifications: [
            { degree: 'Ph.D in Mechanical', institute: 'IIT Madras', year: 2018 },
            { degree: 'M.Tech in Thermal', institute: 'IIT Kanpur', year: 2013 }
        ],
        experience: {
            teaching: 5,
            industry: 3
        },
        publications: [
            { title: 'Heat Transfer Analysis', journal: 'Journal of Heat Transfer', year: 2020 }
        ],
        certifications: ['Certified Energy Manager'],
        memberships: ['ASME Member'],
        salary: {
            basic: 90000,
            allowances: 30000,
            deductions: 9000,
            net: 111000
        },
        performance: {
            rating: 4.5,
            reviews: 90
        },
        schedule: [
            { day: 'Monday', time: '09:00 AM - 10:00 AM', subject: 'Thermodynamics', room: 'LH-301', type: 'Lecture' },
            { day: 'Friday', time: '02:00 PM - 04:00 PM', subject: 'Heat Transfer Lab', room: 'LAB-3', type: 'Lab' }
        ]
    },
    {
        id: 'FAC004',
        name: 'Ms. Priya Sharma',
        designation: 'Lecturer',
        department: 'Computer Science',
        specialization: 'Web Development',
        email: 'priya.sharma@college.edu',
        phone: '+91 98765 11114',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
        joinDate: '2021-07-20',
        qualifications: [
            { degree: 'M.Tech in CS', institute: 'VIT Vellore', year: 2020 }
        ],
        experience: {
            teaching: 3,
            industry: 1
        },
        publications: [],
        certifications: ['Full Stack Web Developer'],
        memberships: [],
        salary: {
            basic: 60000,
            allowances: 20000,
            deductions: 6000,
            net: 74000
        },
        performance: {
            rating: 4.2,
            reviews: 60
        },
        schedule: [
            { day: 'Tuesday', time: '11:00 AM - 12:00 PM', subject: 'Web Technologies', room: 'LH-102', type: 'Lecture' },
            { day: 'Wednesday', time: '02:00 PM - 04:00 PM', subject: 'Web Lab', room: 'LAB-1', type: 'Lab' }
        ]
    },
    {
        id: 'FAC005',
        name: 'Mr. Amit Verma',
        designation: 'Assistant Professor',
        department: 'Civil',
        specialization: 'Structural Engineering',
        email: 'amit.verma@college.edu',
        phone: '+91 98765 11115',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        joinDate: '2018-05-12',
        qualifications: [
            { degree: 'M.Tech in Structural', institute: 'IIT Roorkee', year: 2017 }
        ],
        experience: {
            teaching: 6,
            industry: 2
        },
        publications: [
            { title: 'Earthquake Resistant Structures', journal: 'Civil Engineering Journal', year: 2019 }
        ],
        certifications: ['STAAD Pro Certified'],
        memberships: ['ICE Member'],
        salary: {
            basic: 85000,
            allowances: 28000,
            deductions: 8500,
            net: 104500
        },
        performance: {
            rating: 4.4,
            reviews: 80
        },
        schedule: [
            { day: 'Monday', time: '11:00 AM - 12:00 PM', subject: 'Structural Analysis', room: 'LH-401', type: 'Lecture' },
            { day: 'Thursday', time: '02:00 PM - 04:00 PM', subject: 'Structure Lab', room: 'LAB-4', type: 'Lab' }
        ]
    },
    {
        id: 'FAC006',
        name: 'Dr. Kavita Iyer',
        designation: 'Professor',
        department: 'Mathematics',
        specialization: 'Applied Mathematics',
        email: 'kavita.iyer@college.edu',
        phone: '+91 98765 11116',
        photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop',
        joinDate: '2010-09-05',
        qualifications: [
            { degree: 'Ph.D in Mathematics', institute: 'TIFR Mumbai', year: 2008 }
        ],
        experience: {
            teaching: 15,
            industry: 0
        },
        publications: [
            { title: 'Graph Theory Applications', journal: 'Journal of Mathematics', year: 2015 }
        ],
        certifications: [],
        memberships: ['IMS Life Member'],
        salary: {
            basic: 140000,
            allowances: 45000,
            deductions: 14000,
            net: 171000
        },
        performance: {
            rating: 4.7,
            reviews: 200
        },
        schedule: [
            { day: 'Tuesday', time: '09:00 AM - 10:00 AM', subject: 'Engineering Mathematics', room: 'LH-101', type: 'Lecture' },
            { day: 'Friday', time: '11:00 AM - 12:00 PM', subject: 'Discrete Math', room: 'LH-102', type: 'Lecture' }
        ]
    },
    {
        id: 'FAC007',
        name: 'Mr. Rahul Roy',
        designation: 'Lab Assistant',
        department: 'Computer Science',
        specialization: 'Networking',
        email: 'rahul.roy@college.edu',
        phone: '+91 98765 11117',
        photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
        joinDate: '2022-02-15',
        qualifications: [
            { degree: 'B.Tech in CS', institute: 'Local College', year: 2021 }
        ],
        experience: {
            teaching: 2,
            industry: 0
        },
        publications: [],
        certifications: ['CCNA'],
        memberships: [],
        salary: {
            basic: 30000,
            allowances: 10000,
            deductions: 3000,
            net: 37000
        },
        performance: {
            rating: 4.0,
            reviews: 30
        },
        schedule: [
            { day: 'Monday', time: '09:00 AM - 05:00 PM', subject: 'Network Lab', room: 'LAB-1', type: 'Lab Support' }
        ]
    },
    {
        id: 'FAC008',
        name: 'Dr. Neha Gupta',
        designation: 'Associate Professor',
        department: 'Physics',
        specialization: 'Quantum Physics',
        email: 'neha.gupta@college.edu',
        phone: '+91 98765 11118',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        joinDate: '2016-11-20',
        qualifications: [
            { degree: 'Ph.D in Physics', institute: 'JNU Delhi', year: 2015 }
        ],
        experience: {
            teaching: 9,
            industry: 0
        },
        publications: [
            { title: 'Quantum Entanglement', journal: 'Physics Review', year: 2018 }
        ],
        certifications: [],
        memberships: ['IPS Member'],
        salary: {
            basic: 110000,
            allowances: 35000,
            deductions: 11000,
            net: 134000
        },
        performance: {
            rating: 4.5,
            reviews: 110
        },
        schedule: [
            { day: 'Wednesday', time: '09:00 AM - 10:00 AM', subject: 'Engineering Physics', room: 'LH-103', type: 'Lecture' },
            { day: 'Thursday', time: '02:00 PM - 04:00 PM', subject: 'Physics Lab', room: 'LAB-PHY', type: 'Lab' }
        ]
    },
    {
        id: 'FAC009',
        name: 'Mr. Vikram Singh',
        designation: 'Assistant Professor',
        department: 'Management',
        specialization: 'Finance',
        email: 'vikram.singh@college.edu',
        phone: '+91 98765 11119',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
        joinDate: '2020-06-01',
        qualifications: [
            { degree: 'MBA Finance', institute: 'IIM Calcutta', year: 2019 }
        ],
        experience: {
            teaching: 4,
            industry: 5
        },
        publications: [
            { title: 'Market Trends 2020', journal: 'Finance Weekly', year: 2020 }
        ],
        certifications: ['CFA Level 2'],
        memberships: [],
        salary: {
            basic: 95000,
            allowances: 32000,
            deductions: 9500,
            net: 117500
        },
        performance: {
            rating: 4.3,
            reviews: 70
        },
        schedule: [
            { day: 'Friday', time: '09:00 AM - 10:00 AM', subject: 'Financial Management', room: 'LH-501', type: 'Lecture' }
        ]
    },
    {
        id: 'FAC010',
        name: 'Ms. Sanya Mirza',
        designation: 'Lecturer',
        department: 'English',
        specialization: 'Literature',
        email: 'sanya.mirza@college.edu',
        phone: '+91 98765 11120',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
        joinDate: '2023-01-10',
        qualifications: [
            { degree: 'MA English', institute: 'DU', year: 2022 }
        ],
        experience: {
            teaching: 1,
            industry: 0
        },
        publications: [],
        certifications: [],
        memberships: [],
        salary: {
            basic: 50000,
            allowances: 15000,
            deductions: 5000,
            net: 60000
        },
        performance: {
            rating: 4.1,
            reviews: 40
        },
        schedule: [
            { day: 'Monday', time: '02:00 PM - 03:00 PM', subject: 'Communication Skills', room: 'LH-101', type: 'Lecture' }
        ]
    }
];

export const attendance = [
    {
        id: 'ATT001',
        date: '2024-05-20',
        subject: 'Advanced Algorithms',
        facultyId: 'FAC001',
        class: 'CS-A',
        totalStudents: 60,
        present: 55,
        absent: 5,
        records: [
            { studentId: 'STU001', status: 'Present', time: '10:05 AM' },
            { studentId: 'STU002', status: 'Present', time: '10:02 AM' },
            { studentId: 'STU003', status: 'Absent', reason: 'Sick Leave' },
            { studentId: 'STU004', status: 'Present', time: '10:00 AM' },
            { studentId: 'STU005', status: 'Late', time: '10:15 AM' }
        ]
    },
    {
        id: 'ATT002',
        date: '2024-05-20',
        subject: 'Web Technologies',
        facultyId: 'FAC004',
        class: 'CS-B',
        totalStudents: 58,
        present: 50,
        absent: 8,
        records: []
    },
    {
        id: 'ATT003',
        date: '2024-05-19',
        subject: 'Database Systems',
        facultyId: 'FAC001',
        class: 'CS-A',
        totalStudents: 60,
        present: 58,
        absent: 2,
        records: []
    },
    {
        id: 'ATT004',
        date: '2024-05-19',
        subject: 'Computer Networks',
        facultyId: 'FAC007',
        class: 'CS-B',
        totalStudents: 58,
        present: 45,
        absent: 13,
        records: []
    }
];

export const exams = [
    {
        id: 'EXAM001',
        title: 'End Semester Examination - Spring 2024',
        type: 'End Term',
        startDate: '2024-06-01',
        endDate: '2024-06-15',
        status: 'Upcoming',
        timetable: [
            { date: '2024-06-01', time: '10:00 AM - 01:00 PM', subject: 'Advanced Algorithms', code: 'CS601', room: 'LH-101' },
            { date: '2024-06-03', time: '10:00 AM - 01:00 PM', subject: 'Web Technologies', code: 'CS602', room: 'LH-102' },
            { date: '2024-06-05', time: '10:00 AM - 01:00 PM', subject: 'Database Systems', code: 'CS603', room: 'LH-103' },
            { date: '2024-06-07', time: '10:00 AM - 01:00 PM', subject: 'Computer Networks', code: 'CS604', room: 'LH-104' },
            { date: '2024-06-10', time: '10:00 AM - 01:00 PM', subject: 'Artificial Intelligence', code: 'CS605', room: 'LH-105' }
        ]
    },
    {
        id: 'EXAM002',
        title: 'Mid Semester Examination - Spring 2024',
        type: 'Mid Term',
        startDate: '2024-03-15',
        endDate: '2024-03-20',
        status: 'Completed',
        timetable: []
    }
];

export const grades = [
    {
        studentId: 'STU001',
        semester: 6,
        results: [
            { subject: 'Advanced Algorithms', code: 'CS601', credits: 4, internal: 28, external: 65, total: 93, grade: 'O', points: 10 },
            { subject: 'Web Technologies', code: 'CS602', credits: 4, internal: 25, external: 60, total: 85, grade: 'A+', points: 9 },
            { subject: 'Database Systems', code: 'CS603', credits: 3, internal: 22, external: 55, total: 77, grade: 'A', points: 8 },
            { subject: 'Computer Networks', code: 'CS604', credits: 3, internal: 24, external: 58, total: 82, grade: 'A+', points: 9 },
            { subject: 'Artificial Intelligence', code: 'CS605', credits: 3, internal: 26, external: 62, total: 88, grade: 'A+', points: 9 },
            { subject: 'Project Phase I', code: 'CS606', credits: 2, internal: 45, external: 48, total: 93, grade: 'O', points: 10 }
        ],
        sgpa: 9.15,
        cgpa: 8.85
    },
    {
        studentId: 'STU002',
        semester: 6,
        results: [
            { subject: 'Advanced Algorithms', code: 'CS601', credits: 4, internal: 25, external: 60, total: 85, grade: 'A+', points: 9 },
            { subject: 'Web Technologies', code: 'CS602', credits: 4, internal: 28, external: 68, total: 96, grade: 'O', points: 10 },
            { subject: 'Database Systems', code: 'CS603', credits: 3, internal: 24, external: 60, total: 84, grade: 'A+', points: 9 },
            { subject: 'Computer Networks', code: 'CS604', credits: 3, internal: 26, external: 64, total: 90, grade: 'O', points: 10 },
            { subject: 'Artificial Intelligence', code: 'CS605', credits: 3, internal: 27, external: 65, total: 92, grade: 'O', points: 10 },
            { subject: 'Project Phase I', code: 'CS606', credits: 2, internal: 48, external: 49, total: 97, grade: 'O', points: 10 }
        ],
        sgpa: 9.68,
        cgpa: 9.25
    }
];

export const feeStructures = [
    {
        id: 'FEE_CS_6',
        program: 'B.Tech',
        department: 'Computer Science',
        semester: 6,
        academicYear: '2023-2024',
        components: [
            { name: 'Tuition Fee', amount: 45000, mandatory: true },
            { name: 'Development Fee', amount: 5000, mandatory: true },
            { name: 'Lab Fee', amount: 3000, mandatory: true },
            { name: 'Library Fee', amount: 2000, mandatory: true },
            { name: 'Examination Fee', amount: 1500, mandatory: true },
            { name: 'Internet Charges', amount: 1000, mandatory: true }
        ],
        totalAmount: 57500,
        dueDate: '2024-01-15',
        lateFeeRule: '100 per day after due date'
    }
];

export const studentFees = [
    {
        studentId: 'STU001',
        feeStructureId: 'FEE_CS_6',
        totalAmount: 57500,
        paidAmount: 40000,
        dueAmount: 17500,
        status: 'Partial', // Paid, Partial, Unpaid
        scholarship: 0,
        fine: 0
    },
    {
        studentId: 'STU002',
        feeStructureId: 'FEE_CS_6',
        totalAmount: 57500,
        paidAmount: 57500,
        dueAmount: 0,
        status: 'Paid',
        scholarship: 0,
        fine: 0
    },
    {
        studentId: 'STU003',
        feeStructureId: 'FEE_CS_6',
        totalAmount: 57500,
        paidAmount: 0,
        dueAmount: 57500,
        status: 'Unpaid',
        scholarship: 0,
        fine: 500
    }
];

export const feePayments = [
    {
        id: 'TXN1001',
        studentId: 'STU001',
        date: '2024-01-10',
        amount: 40000,
        mode: 'Online', // Online, Cash, Cheque
        status: 'Success',
        reference: 'PAY_123456789'
    },
    {
        id: 'TXN1002',
        studentId: 'STU002',
        date: '2024-01-05',
        amount: 57500,
        mode: 'Online',
        status: 'Success',
    }
];

export const libraryBooks = [
    {
        id: 'LIB001',
        isbn: '978-0131103627',
        title: 'The C Programming Language',
        author: 'Brian W. Kernighan, Dennis M. Ritchie',
        publisher: 'Prentice Hall',
        category: 'Computer Science',
        edition: '2nd',
        copies: 10,
        available: 8,
        location: 'Rack A-12',
        cover: 'https://m.media-amazon.com/images/I/51L7aRvbU-L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 'LIB002',
        isbn: '978-0132350884',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        publisher: 'Prentice Hall',
        category: 'Software Engineering',
        edition: '1st',
        copies: 15,
        available: 12,
        location: 'Rack B-05',
        cover: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 'LIB003',
        isbn: '978-0262033848',
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        publisher: 'MIT Press',
        category: 'Computer Science',
        edition: '3rd',
        copies: 20,
        available: 5,
        location: 'Rack A-15',
        cover: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 'LIB004',
        isbn: '978-0134685991',
        title: 'Effective Java',
        author: 'Joshua Bloch',
        publisher: 'Addison-Wesley',
        category: 'Programming',
        edition: '3rd',
        copies: 8,
        available: 8,
        location: 'Rack C-02',
        cover: 'https://m.media-amazon.com/images/I/41-sN-mzwKL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 'LIB005',
        isbn: '978-1491950357',
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        publisher: 'O\'Reilly Media',
        category: 'Database',
        edition: '1st',
        copies: 12,
        available: 2,
        location: 'Rack B-10',
        cover: 'https://m.media-amazon.com/images/I/91rr3B8Kj4L._AC_UF1000,1000_QL80_.jpg'
    }
];

export const issuedBooks = [
    {
        id: 'ISS1001',
        bookId: 'LIB001',
        studentId: 'STU001',
        issueDate: '2023-12-15',
        dueDate: '2023-12-29',
        returnDate: null,
        status: 'Overdue',
        fine: 30
    },
    {
        id: 'ISS1002',
        bookId: 'LIB003',
        studentId: 'STU001',
        issueDate: '2024-01-05',
        dueDate: '2024-01-19',
        returnDate: null,
        status: 'Issued',
        fine: 0
    },
    {
        id: 'ISS1003',
        bookId: 'LIB002',
        studentId: 'STU002',
        issueDate: '2024-01-02',
        dueDate: '2024-01-16',
        returnDate: '2024-01-10',
        status: 'Returned',
    }
];

export const hostelBuildings = [
    { id: 'H1', name: 'Boys Hostel A', type: 'Boys', capacity: 200, floors: 4, warden: 'Mr. Sharma' },
    { id: 'H2', name: 'Girls Hostel B', type: 'Girls', capacity: 150, floors: 3, warden: 'Mrs. Gupta' }
];

export const hostelRooms = [
    { id: 'R101', buildingId: 'H1', number: '101', floor: 1, type: 'Double', capacity: 2, occupants: ['STU001', 'STU004'] },
    { id: 'R102', buildingId: 'H1', number: '102', floor: 1, type: 'Single', capacity: 1, occupants: [] },
    { id: 'R103', buildingId: 'H1', number: '103', floor: 1, type: 'Triple', capacity: 3, occupants: ['STU005'] },
    { id: 'R201', buildingId: 'H2', number: '201', floor: 2, type: 'Double', capacity: 2, occupants: ['STU002'] }
];

export const messMenu = [
    { day: 'Monday', breakfast: 'Idli Sambar', lunch: 'Rice, Dal, Mixed Veg', snack: 'Tea, Biscuits', dinner: 'Chapati, Paneer Butter Masala' },
    { day: 'Tuesday', breakfast: 'Poha', lunch: 'Rice, Rajma', snack: 'Coffee, Samosa', dinner: 'Fried Rice, Manchurian' },
    { day: 'Wednesday', breakfast: 'Upma', lunch: 'Rice, Sambar, Aloo Fry', snack: 'Tea, Cake', dinner: 'Chapati, Egg Curry' },
    { day: 'Thursday', breakfast: 'Dosa', lunch: 'Rice, Dal, Bhindi Fry', snack: 'Coffee, Puff', dinner: 'Biryani, Raita' },
    { day: 'Friday', breakfast: 'Paratha', lunch: 'Rice, Kadhi', snack: 'Tea, Vada', dinner: 'Chapati, Kofta' },
    { day: 'Saturday', breakfast: 'Puri Bhaji', lunch: 'Rice, Dal, Jeera Aloo', snack: 'Coffee, Sandwich', dinner: 'Pasta' },
    { day: 'Sunday', breakfast: 'Bread Omelette', lunch: 'Special Thali', snack: 'Tea, Cookies', dinner: 'Light Khichdi' }
];

export const hostelComplaints = [
    { id: 'CMP001', studentId: 'STU001', type: 'Electrical', description: 'Fan not working in Room 101', status: 'Pending', date: '2024-01-10' },
    { id: 'CMP002', studentId: 'STU002', type: 'Plumbing', description: 'Leaking tap in bathroom', status: 'Resolved', date: '2024-01-05' }
];

export const transportRoutes = [
    { id: 'RT001', routeNo: 'R-10', start: 'City Centre', end: 'College Campus', stops: ['City Centre', 'Mall Road', 'Station', 'Campus'], busId: 'BUS001', time: '7:30 AM' },
    { id: 'RT002', routeNo: 'R-12', start: 'North Extension', end: 'College Campus', stops: ['North Ext', 'Highway Plaza', 'Campus'], busId: 'BUS002', time: '7:45 AM' }
];

export const transportVehicles = [
    { id: 'BUS001', regNo: 'KA-01-AB-1234', model: 'Tata Starbus', capacity: 40, status: 'Active', driverId: 'DRV001', mileage: 12500, lastService: '2023-12-01' },
    { id: 'BUS002', regNo: 'KA-01-XY-5678', model: 'Ashok Leyland', capacity: 50, status: 'Maintenance', driverId: 'DRV002', mileage: 15000, lastService: '2023-11-15' }
];

export const transportDrivers = [
    { id: 'DRV001', name: 'Ramesh Kumar', license: 'DL-1234567890', phone: '9876543210', experience: '5 Years' },
    { id: 'DRV002', name: 'Suresh Singh', license: 'DL-0987654321', phone: '9123456780', experience: '8 Years' }
];

export const studentTransport = [
    { studentId: 'STU001', routeId: 'RT001', stop: 'Mall Road', passStatus: 'Active', validTill: '2024-05-31' },
    { studentId: 'STU002', routeId: 'RT002', stop: 'North Ext', passStatus: 'Expired', validTill: '2023-12-31' }
];
