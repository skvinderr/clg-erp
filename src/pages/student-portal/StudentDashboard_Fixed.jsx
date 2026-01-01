import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Book, TrendingUp, AlertCircle, CheckCircle, Bell, Library, FileText, Megaphone, Download, BedDouble, Bus, Briefcase } from 'lucide-react';
import { students, notices } from '../../data/mockData';

export default function StudentDashboard() {
    const navigate = useNavigate();
    // Mock logged in student
    const student = students[0];

    const schedule = [
        { time: '09:00 AM', subject: 'Advanced Algorithms', room: 'LH-101', type: 'Lecture' },
        { time: '10:30 AM', subject: 'Database Systems', room: 'Lab-2', type: 'Lab' },
        { time: '01:00 PM', subject: 'Computer Networks', room: 'LH-102', type: 'Lecture' },
    ];

    const assignments = [
        { id: 1, subject: 'Algorithms', title: 'Dynamic Programming Problem Set', due: 'Tomorrow', status: 'Pending' },
        { id: 2, subject: 'Database', title: 'SQL Queries Project', due: 'In 3 days', status: 'Pending' },
    ];

    return (
        <div className="pb-12">
            {/* Student Navbar */}
            {/* Navbar removed as it is provided by DashboardLayout */}

            <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Welcome back, {student.name.split(' ')[0]}! 👋</h1>
                        <p className="text-secondary-500 dark:text-secondary-400">Here's what's happening in your academic life today.</p>
                    </div>
                    <div className="bg-white dark:bg-secondary-900 px-4 py-2 rounded-lg border border-secondary-200 dark:border-secondary-800 flex items-center gap-2 shadow-sm">
                        <Calendar size={18} className="text-primary-600" />
                        <span className="font-medium text-secondary-700 dark:text-secondary-300">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                <CheckCircle size={24} />
                            </div>
                            <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Good</span>
                        </div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Attendance</p>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{student.academics.attendance}%</h3>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                                <TrendingUp size={24} />
                            </div>
                        </div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">CGPA</p>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{student.academics.cgpa}</h3>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                                <AlertCircle size={24} />
                            </div>
                            <span className="text-xs font-bold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">{assignments.length} Due</span>
                        </div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Pending Assignments</p>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{assignments.length}</h3>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                                <Book size={24} />
                            </div>
                        </div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Credits Earned</p>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{student.academics.creditsEarned}/160</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Today's Schedule */}
                    <div className="lg:col-span-2 bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <Clock size={20} className="text-primary-600" />
                            Today's Schedule
                        </h2>
                        <div className="space-y-4">
                            {schedule.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors border border-transparent hover:border-secondary-100 dark:hover:border-secondary-700">
                                    <div className="w-20 text-center">
                                        <p className="font-bold text-secondary-900 dark:text-secondary-100">{item.time.split(' ')[0]}</p>
                                        <p className="text-xs text-secondary-500 dark:text-secondary-400">{item.time.split(' ')[1]}</p>
                                    </div>
                                    <div className="w-1 h-12 bg-primary-200 dark:bg-primary-800 rounded-full relative">
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-600 rounded-full"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">{item.subject}</h4>
                                        <p className="text-sm text-secondary-500 dark:text-secondary-400">{item.type} • {item.room}</p>
                                    </div>
                                    <button className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                                        Join / View
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Deadlines */}
                    <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <AlertCircle size={20} className="text-orange-600" />
                            Upcoming Deadlines
                        </h2>
                        <div className="space-y-4">
                            {assignments.map((assignment) => (
                                <div key={assignment.id} className="p-4 border border-secondary-100 dark:border-secondary-800 rounded-xl bg-secondary-50 dark:bg-secondary-800/50">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">{assignment.subject}</span>
                                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">{assignment.due}</span>
                                    </div>
                                    <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 text-sm mb-1">{assignment.title}</h4>
                                    <button className="w-full mt-3 py-2 text-sm text-center border border-secondary-300 dark:border-secondary-700 rounded-lg hover:bg-white dark:hover:bg-secondary-800 transition-colors text-secondary-700 dark:text-secondary-300">
                                        Submit Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* New Widgets Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Exam Schedule */}
                    {/* Exam Schedule */}
                    <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <FileText size={20} className="text-primary-600" />
                            Exam Schedule
                        </h2>
                        {student.exams ? (
                            <div className="space-y-4">
                                {student.exams.map((exam, index) => (
                                    <div key={index} className="p-3 border border-secondary-100 dark:border-secondary-800 rounded-lg bg-secondary-50 dark:bg-secondary-800/50">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">{exam.subject}</h4>
                                                <p className="text-sm text-secondary-500 dark:text-secondary-400">{exam.date} • {exam.time}</p>
                                                <p className="text-xs text-secondary-400 mt-1">Room: {exam.room}</p>
                                            </div>
                                            <button className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" title="Download Hall Ticket">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-secondary-500 dark:text-secondary-400 text-sm">No upcoming exams scheduled.</p>
                        )}
                    </div>

                    {/* Library Status */}
                    {/* Library Status */}
                    <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <Library size={20} className="text-purple-600 dark:text-purple-400" />
                            Library Status
                        </h2>
                        {student.library ? (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-secondary-500 dark:text-secondary-400">Books Issued</span>
                                    <span className="font-bold text-secondary-900 dark:text-secondary-100">{student.library.booksIssued}</span>
                                </div>
                                {student.library.books.map((book, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 border border-secondary-100 dark:border-secondary-800 rounded-lg">
                                        <Book size={16} className="text-secondary-400" />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-secondary-900 dark:text-secondary-100 truncate">{book.title}</p>
                                            <p className={`text-xs ${book.status === 'Overdue' ? 'text-red-600 dark:text-red-400 font-bold' : 'text-green-600 dark:text-green-400'}`}>
                                                Due: {book.due} ({book.status})
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-secondary-500 dark:text-secondary-400 text-sm">No books issued currently.</p>
                        )}
                    </div>

                    {/* Notices */}
                    {/* Notices */}
                    <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <Megaphone size={20} className="text-yellow-600 dark:text-yellow-400" />
                            Notice Board
                        </h2>
                        <div className="space-y-4">
                            {notices.map((notice) => (
                                <div key={notice.id} className="pb-3 border-b border-secondary-100 dark:border-secondary-800 last:border-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full 
                                            ${notice.type === 'Exam' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                                                notice.type === 'Event' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                                                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                                            {notice.type}
                                        </span>
                                        <span className="text-xs text-secondary-400">{notice.date}</span>
                                    </div>
                                    <p className="text-sm font-medium text-secondary-900 dark:text-secondary-100 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                                        {notice.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links for Hostel & Transport */}
                    {/* Quick Links for Hostel & Transport */}
                    <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6 md:col-span-3">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6">Campus Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                                onClick={() => navigate('/hostel')}
                                className="flex items-center gap-4 p-4 border border-secondary-200 dark:border-secondary-800 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all cursor-pointer group"
                            >
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg group-hover:bg-white dark:group-hover:bg-secondary-800 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    <BedDouble size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary-900 dark:text-secondary-100 group-hover:text-primary-700 dark:group-hover:text-primary-400">Hostel & Mess</h3>
                                    <p className="text-sm text-secondary-500 dark:text-secondary-400">Room details, mess menu, and complaints</p>
                                </div>
                            </div>

                            <div
                                onClick={() => navigate('/transport')}
                                className="flex items-center gap-4 p-4 border border-secondary-200 dark:border-secondary-800 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all cursor-pointer group"
                            >
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg group-hover:bg-white dark:group-hover:bg-secondary-800 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    <Bus size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary-900 dark:text-secondary-100 group-hover:text-primary-700 dark:group-hover:text-primary-400">Transport</h3>
                                    <p className="text-sm text-secondary-500 dark:text-secondary-400">Bus pass, route info, and live tracking</p>
                                </div>
                            </div>

                            <div
                                onClick={() => navigate('/placement')}
                                className="flex items-center gap-4 p-4 border border-secondary-200 dark:border-secondary-800 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all cursor-pointer group"
                            >
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg group-hover:bg-white dark:group-hover:bg-secondary-800 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary-900 dark:text-secondary-100 group-hover:text-primary-700 dark:group-hover:text-primary-400">Placement Cell</h3>
                                    <p className="text-sm text-secondary-500 dark:text-secondary-400">Jobs, internships, and training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
