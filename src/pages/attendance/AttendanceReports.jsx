import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { attendance, students } from '../../data/mockData';
import {
    ArrowLeft, BarChart2, PieChart, Download, Filter,
    Calendar, Users, BookOpen
} from 'lucide-react';

const AttendanceReports = () => {
    const navigate = useNavigate();
    const [reportType, setReportType] = useState('class'); // class, student, subject
    const [dateRange, setDateRange] = useState('month');

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/attendance')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Attendance Reports</h1>
                    <p className="text-secondary-500">Analyze attendance trends and generate reports</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-2 bg-secondary-50 p-1 rounded-lg">
                    {['class', 'student', 'subject'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setReportType(type)}
                            className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${reportType === type
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-secondary-500 hover:text-secondary-700'
                                }`}
                        >
                            {type} Wise
                        </button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <select
                            className="pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                        >
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="semester">This Semester</option>
                        </select>
                    </div>
                    <button className="btn-secondary flex items-center gap-2">
                        <Download size={18} />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            {/* Charts Section (Mocked Visuals) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <BarChart2 className="text-primary-500" />
                        Attendance Trend
                    </h3>
                    <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-l border-secondary-200">
                        {[65, 70, 85, 82, 90, 88, 92].map((h, i) => (
                            <div key={i} className="w-full bg-primary-100 hover:bg-primary-200 rounded-t-sm relative group transition-colors" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-secondary-500 px-4">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <PieChart className="text-purple-500" />
                        Attendance Distribution
                    </h3>
                    <div className="h-64 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-8 border-secondary-100 flex items-center justify-center relative">
                            <svg viewBox="0 0 36 36" className="w-full h-full absolute transform -rotate-90">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#E2E8F0"
                                    strokeWidth="4"
                                />
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="4"
                                    strokeDasharray="75, 100"
                                />
                            </svg>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-secondary-900">75%</p>
                                <p className="text-xs text-secondary-500">Average</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm text-secondary-600">Present</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-secondary-200"></div>
                            <span className="text-sm text-secondary-600">Absent</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Table */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="p-4 border-b border-secondary-200 bg-secondary-50">
                    <h3 className="font-bold text-secondary-900">Detailed Report</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-secondary-200">
                                <th className="p-4 font-semibold text-secondary-700">Student Name</th>
                                <th className="p-4 font-semibold text-secondary-700">Roll Number</th>
                                <th className="p-4 font-semibold text-secondary-700">Total Classes</th>
                                <th className="p-4 font-semibold text-secondary-700">Present</th>
                                <th className="p-4 font-semibold text-secondary-700">Absent</th>
                                <th className="p-4 font-semibold text-secondary-700">Percentage</th>
                                <th className="p-4 font-semibold text-secondary-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.slice(0, 5).map((student) => {
                                const total = 120; // Mock total
                                const present = Math.floor(Math.random() * (120 - 80) + 80);
                                const pct = Math.round((present / total) * 100);

                                return (
                                    <tr key={student.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                                        <td className="p-4 font-medium text-secondary-900">{student.name}</td>
                                        <td className="p-4 text-secondary-600">{student.rollNumber}</td>
                                        <td className="p-4 text-secondary-600">{total}</td>
                                        <td className="p-4 text-green-600 font-medium">{present}</td>
                                        <td className="p-4 text-red-600 font-medium">{total - present}</td>
                                        <td className="p-4 font-bold text-secondary-900">{pct}%</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${pct >= 75
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                }`}>
                                                {pct >= 75 ? 'Good' : 'Shortage'}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AttendanceReports;
