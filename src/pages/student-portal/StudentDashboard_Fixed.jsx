import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Calendar, Clock, Book, TrendingUp, AlertCircle, CheckCircle,
    Bell, Library, FileText, Megaphone, Download, BedDouble,
    Bus, Briefcase, MoreHorizontal, ChevronRight
} from 'lucide-react';
import { students, notices } from '../../data/mockData';

export default function StudentDashboard() {
    const navigate = useNavigate();
    const student = students[0];

    const schedule = [
        { time: '09:00 AM', subject: 'Advanced Algorithms', room: 'LH-101', type: 'Lecture', color: 'bg-blue-500' },
        { time: '10:30 AM', subject: 'Database Systems', room: 'Lab-2', type: 'Lab', color: 'bg-purple-500' },
        { time: '01:00 PM', subject: 'Computer Networks', room: 'LH-102', type: 'Lecture', color: 'bg-orange-500' },
    ];

    const assignments = [
        { id: 1, subject: 'Algorithms', title: 'Dynamic Programming Problem Set', due: 'Tomorrow', status: 'Pending', priority: 'High' },
        { id: 2, subject: 'Database', title: 'SQL Queries Project', due: 'In 3 days', status: 'Pending', priority: 'Medium' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Student Portal</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your academic journey and campus life.</p>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 uppercase font-semibold">Today</p>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    </div>
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between group hover:bg-slate-900 dark:hover:bg-slate-900 transition-all duration-300">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 group-hover:text-slate-400 text-sm font-medium transition-colors">Attendance</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white mt-1 transition-colors">{student.academics.attendance}%</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-slate-800 group-hover:text-green-500 transition-all group-hover:scale-110">
                        <CheckCircle size={20} />
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between group hover:bg-slate-900 dark:hover:bg-slate-900 transition-all duration-300">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 group-hover:text-slate-400 text-sm font-medium transition-colors">CGPA</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white mt-1 transition-colors">{student.academics.cgpa}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-slate-800 group-hover:text-purple-500 transition-all group-hover:scale-110">
                        <TrendingUp size={20} />
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between group hover:bg-slate-900 dark:hover:bg-slate-900 transition-all duration-300">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 group-hover:text-slate-400 text-sm font-medium transition-colors">Pending Tasks</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white mt-1 transition-colors">{assignments.length}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-slate-800 group-hover:text-orange-500 transition-all group-hover:scale-110">
                        <Clock size={20} />
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between group hover:bg-slate-900 dark:hover:bg-slate-900 transition-all duration-300">
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 group-hover:text-slate-400 text-sm font-medium transition-colors">Credits</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white mt-1 transition-colors">{student.academics.creditsEarned}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-slate-800 group-hover:text-blue-500 transition-all group-hover:scale-110">
                        <Book size={20} />
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Timeline & Assignments) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Schedule Timeline */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Today's Timeline</h2>
                            <button onClick={() => navigate('/student-portal/schedule')} className="text-sm text-blue-600 font-medium hover:underline">View Full Schedule</button>
                        </div>
                        <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-700 ml-3 space-y-8">
                            {schedule.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className={`absolute -left-[25px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-slate-800 ${item.color}`}></div>
                                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.subject}</h4>
                                                <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                                    <Clock size={14} /> {item.time} • {item.room}
                                                </p>
                                            </div>
                                            <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm">
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Assignments */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Due Assignments</h2>
                        </div>
                        <div className="space-y-3">
                            {assignments.map((assignment) => (
                                <div key={assignment.id} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${assignment.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`}>
                                            <AlertCircle size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-slate-200">{assignment.title}</h4>
                                            <p className="text-sm text-slate-500">{assignment.subject} • Due {assignment.due}</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                                        Submit
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Notices & Quick Actions) */}
                <div className="space-y-8">
                    {/* Notice Board Widget - Updated for Dark on Hover */}
                    <div className="bg-white dark:bg-slate-800 group hover:bg-slate-900 dark:hover:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white group-hover:text-white transition-colors">
                                <Megaphone size={18} className="text-yellow-500 group-hover:text-yellow-400 transition-colors" /> Notices
                            </h2>
                            <span className="text-xs bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-slate-300 px-2 py-1 rounded transition-colors border border-slate-200 dark:border-slate-600 group-hover:border-slate-700">New: 3</span>
                        </div>
                        <div className="space-y-4">
                            {notices.map((notice, idx) => (
                                <div key={notice.id} className={`pb-3 ${idx !== notices.length - 1 ? 'border-b border-slate-100 dark:border-slate-700 group-hover:border-slate-800' : ''}`}>
                                    <p className="text-sm font-medium leading-snug text-slate-700 dark:text-slate-200 group-hover:text-slate-200 hover:!text-blue-400 cursor-pointer transition-colors">{notice.title}</p>
                                    <p className="text-xs text-slate-400 mt-1">{notice.date}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 bg-slate-50 dark:bg-slate-900/50 group-hover:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-300 hover:!bg-slate-700 hover:!text-white rounded-lg text-sm font-medium transition-colors">
                            View All Notices
                        </button>
                    </div>

                    {/* Quick Access Grid */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Access</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => navigate('/hostel')}
                                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-colors flex flex-col items-center gap-2 text-center group"
                            >
                                <BedDouble size={24} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Hostel</span>
                            </button>
                            <button
                                onClick={() => navigate('/transport')}
                                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 transition-colors flex flex-col items-center gap-2 text-center group"
                            >
                                <Bus size={24} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Transport</span>
                            </button>
                            <button
                                onClick={() => navigate('/library')}
                                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 transition-colors flex flex-col items-center gap-2 text-center group"
                            >
                                <Library size={24} className="text-slate-400 group-hover:text-purple-600 transition-colors" />
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Library</span>
                            </button>
                            <button
                                onClick={() => navigate('/placement')}
                                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 transition-colors flex flex-col items-center gap-2 text-center group"
                            >
                                <Briefcase size={24} className="text-slate-400 group-hover:text-green-600 transition-colors" />
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Placement</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
