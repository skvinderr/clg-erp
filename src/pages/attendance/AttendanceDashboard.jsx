import React from 'react';
import { useNavigate } from 'react-router-dom';
import { attendance } from '../../data/mockData';
import {
    Users, CheckCircle, XCircle, Clock, Calendar,
    BarChart2, AlertTriangle, ArrowRight
} from 'lucide-react';

const AttendanceDashboard = () => {
    const navigate = useNavigate();
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    // Mock stats calculation
    const totalClassesToday = 4;
    const totalStudents = 236;
    const presentToday = 208;
    const attendancePercentage = Math.round((presentToday / totalStudents) * 100);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Attendance Overview</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">{today}</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/attendance/reports')}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <BarChart2 size={18} />
                        <span>Reports</span>
                    </button>
                    <button
                        onClick={() => navigate('/attendance/mark')}
                        className="btn-primary flex items-center gap-2"
                    >
                        <CheckCircle size={18} />
                        <span>Mark Attendance</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-secondary-900 p-4 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Total Students</p>
                        <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{totalStudents}</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-secondary-900 p-4 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Present Today</p>
                        <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{presentToday}</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-secondary-900 p-4 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                        <XCircle size={24} />
                    </div>
                    <div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Absent Today</p>
                        <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{totalStudents - presentToday}</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-secondary-900 p-4 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                        <BarChart2 size={24} />
                    </div>
                    <div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Average Attendance</p>
                        <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{attendancePercentage}%</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Attendance Records */}
                <div className="lg:col-span-2 bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">Recent Classes</h2>
                        <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {attendance.slice(0, 3).map((record) => (
                            <div key={record.id} className="flex items-center justify-between p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl border border-secondary-100 dark:border-secondary-800">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
                                        <Calendar size={20} className="text-secondary-500 dark:text-secondary-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary-900 dark:text-secondary-100">{record.subject}</h3>
                                        <p className="text-sm text-secondary-600 dark:text-secondary-400">{record.class} • {new Date(record.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-center">
                                        <p className="text-xs text-secondary-500 font-medium">PRESENT</p>
                                        <p className="text-lg font-bold text-green-600">{record.present}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-secondary-500 font-medium">ABSENT</p>
                                        <p className="text-lg font-bold text-red-600">{record.absent}</p>
                                    </div>
                                    <button className="p-2 hover:bg-secondary-200 rounded-full transition-colors">
                                        <ArrowRight size={20} className="text-secondary-400" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Low Attendance Alerts */}
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-4 flex items-center gap-2">
                        <AlertTriangle className="text-orange-500" />
                        Low Attendance Alerts
                    </h2>
                    <div className="space-y-3">
                        {[
                            { name: 'Rohan Gupta', id: 'ME21001', pct: 68 },
                            { name: 'Kabir Das', id: 'ME21002', pct: 60 },
                            { name: 'Arjun Reddy', id: 'CS21003', pct: 72 },
                        ].map((student, idx) => (
                            <div key={idx} className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-secondary-900 dark:text-secondary-100">{student.name}</p>
                                    <p className="text-xs text-secondary-600 dark:text-secondary-400">{student.id}</p>
                                </div>
                                <span className="px-2 py-1 bg-white dark:bg-secondary-800 text-orange-600 dark:text-orange-400 text-sm font-bold rounded border border-orange-200 dark:border-orange-800">
                                    {student.pct}%
                                </span>
                            </div>
                        ))}
                        <button className="w-full mt-4 py-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-200 font-medium border border-secondary-200 dark:border-secondary-700 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors">
                            View Defaulter List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceDashboard;
