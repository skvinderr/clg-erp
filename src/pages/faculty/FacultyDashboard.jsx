import React from 'react';
import { faculty } from '../../data/mockData';
import {
    Calendar, Users, Clock, CheckCircle, AlertCircle, FileText,
    MessageSquare, TrendingUp, BookOpen, Plus
} from 'lucide-react';

const FacultyDashboard = () => {
    // Mock logged-in faculty
    const currentFaculty = faculty[0];
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    const stats = [
        { label: 'Total Classes', value: '12', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
        { label: 'Students', value: '145', icon: Users, color: 'bg-green-50 text-green-600' },
        { label: 'Hours/Week', value: '18', icon: Clock, color: 'bg-purple-50 text-purple-600' },
        { label: 'Pending Reviews', value: '5', icon: AlertCircle, color: 'bg-orange-50 text-orange-600' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Welcome back, {currentFaculty.name.split(' ')[1]}!</h1>
                    <p className="text-secondary-500">{today} • {currentFaculty.department} Department</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-secondary">View Schedule</button>
                    <button className="btn-primary flex items-center gap-2">
                        <Plus size={18} />
                        <span>Create Assignment</span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-secondary-500 text-sm">{stat.label}</p>
                            <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Today's Schedule */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-secondary-900">Today's Schedule</h2>
                        <button className="text-primary-600 text-sm font-medium hover:underline">View Full Timetable</button>
                    </div>
                    <div className="space-y-4">
                        {currentFaculty.schedule.map((classItem, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                                <div className="flex flex-col items-center min-w-[80px] bg-white p-2 rounded-lg border border-secondary-200">
                                    <span className="text-xs text-secondary-500 font-medium">START</span>
                                    <span className="text-sm font-bold text-secondary-900">{classItem.time.split(' - ')[0]}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-secondary-900">{classItem.subject}</h3>
                                            <p className="text-sm text-secondary-600">{classItem.room} • {classItem.type}</p>
                                        </div>
                                        <button className="px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-200 transition-colors">
                                            Mark Attendance
                                        </button>
                                    </div>
                                    <div className="mt-3 flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                                            ))}
                                        </div>
                                        <span className="text-xs text-secondary-500">+42 Students</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {currentFaculty.schedule.length === 0 && (
                            <p className="text-secondary-500 text-center py-8">No classes scheduled for today.</p>
                        )}
                    </div>
                </div>

                {/* Quick Actions & Notifications */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-lg font-bold text-secondary-900 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="p-3 text-left bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors group">
                                <CheckCircle className="text-green-600 mb-2 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-sm font-medium text-secondary-900 block">Attendance</span>
                            </button>
                            <button className="p-3 text-left bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors group">
                                <FileText className="text-blue-600 mb-2 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-sm font-medium text-secondary-900 block">Grades</span>
                            </button>
                            <button className="p-3 text-left bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors group">
                                <MessageSquare className="text-purple-600 mb-2 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-sm font-medium text-secondary-900 block">Messages</span>
                            </button>
                            <button className="p-3 text-left bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors group">
                                <TrendingUp className="text-orange-600 mb-2 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-sm font-medium text-secondary-900 block">Reports</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary-900 to-primary-800 p-6 rounded-xl shadow-md text-white">
                        <h3 className="font-bold text-lg mb-2">Research Update</h3>
                        <p className="text-primary-100 text-sm mb-4">Your paper "AI in Healthcare" has reached 50 citations this week!</p>
                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                            View Analytics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;
