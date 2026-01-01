import React from 'react';
import { useNavigate } from 'react-router-dom';
import { studentFees } from '../../data/mockData';
import {
    ArrowLeft, BarChart2, PieChart, Download, Calendar
} from 'lucide-react';

const FeeReports = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/fees')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Fee Reports</h1>
                    <p className="text-secondary-500">Financial analytics and collection reports</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-2 bg-secondary-50 p-1 rounded-lg">
                    {['Daily', 'Monthly', 'Yearly'].map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${type === 'Monthly'
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-secondary-500 hover:text-secondary-700'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <select className="pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                            <option>January 2024</option>
                            <option>December 2023</option>
                        </select>
                    </div>
                    <button className="btn-secondary flex items-center gap-2">
                        <Download size={18} />
                        <span>Export Report</span>
                    </button>
                </div>
            </div>

            {/* Charts Section (Mocked) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <BarChart2 className="text-primary-500" />
                        Collection Trend
                    </h3>
                    <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-l border-secondary-200">
                        {[45, 60, 75, 50, 80, 95, 85].map((h, i) => (
                            <div key={i} className="w-full bg-primary-100 hover:bg-primary-200 rounded-t-sm relative group transition-colors" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ₹{h}k
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
                        Fee Status Distribution
                    </h3>
                    <div className="h-64 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-8 border-secondary-100 flex items-center justify-center relative">
                            <svg viewBox="0 0 36 36" className="w-full h-full absolute transform -rotate-90">
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="60, 100" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="20, 100" strokeDashoffset="-60" />
                            </svg>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-secondary-900">60%</p>
                                <p className="text-xs text-secondary-500">Collected</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm text-secondary-600">Paid</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-secondary-600">Partial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-secondary-200"></div>
                            <span className="text-sm text-secondary-600">Unpaid</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Defaulters List */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="p-4 border-b border-secondary-200 bg-secondary-50">
                    <h3 className="font-bold text-secondary-900">Fee Defaulters</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-secondary-200">
                                <th className="p-4 font-semibold text-secondary-700">Student ID</th>
                                <th className="p-4 font-semibold text-secondary-700">Total Amount</th>
                                <th className="p-4 font-semibold text-secondary-700">Paid</th>
                                <th className="p-4 font-semibold text-secondary-700">Due</th>
                                <th className="p-4 font-semibold text-secondary-700">Status</th>
                                <th className="p-4 font-semibold text-secondary-700">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentFees.filter(s => s.dueAmount > 0).map((student) => (
                                <tr key={student.studentId} className="border-b border-secondary-100 hover:bg-secondary-50">
                                    <td className="p-4 font-medium text-secondary-900">{student.studentId}</td>
                                    <td className="p-4 text-secondary-600">₹{student.totalAmount.toLocaleString()}</td>
                                    <td className="p-4 text-green-600">₹{student.paidAmount.toLocaleString()}</td>
                                    <td className="p-4 font-bold text-red-600">₹{student.dueAmount.toLocaleString()}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${student.status === 'Partial' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="text-primary-600 hover:underline text-sm font-medium">Send Reminder</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeeReports;
