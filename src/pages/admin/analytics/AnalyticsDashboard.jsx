import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
    TrendingUp, Users, AlertTriangle, Download, Filter, MoreHorizontal,
    Brain, Target, Award
} from 'lucide-react';

const AnalyticsDashboard = () => {
    const [timeRange, setTimeRange] = useState('6m');

    // Mock Data for Predictive Analytics
    const performanceData = [
        { month: 'Jan', actual: 78, predicted: 80 },
        { month: 'Feb', actual: 82, predicted: 81 },
        { month: 'Mar', actual: 85, predicted: 84 },
        { month: 'Apr', actual: 81, predicted: 86 },
        { month: 'May', actual: 88, predicted: 87 },
        { month: 'Jun', actual: null, predicted: 89 }, // Future
        { month: 'Jul', actual: null, predicted: 91 }, // Future
    ];

    const atRiskStudents = [
        { id: 1, name: 'John Doe', course: 'B.Tech CS', risk: 'High', reason: 'Low Attendance (<65%)', trend: 'down' },
        { id: 2, name: 'Alice Smith', course: 'MBA', risk: 'Medium', reason: 'Declining Grades', trend: 'down' },
        { id: 3, name: 'Robert Johnson', course: 'B.Sc Physics', risk: 'Medium', reason: 'Fee Default', trend: 'flat' },
    ];

    const placementPrediction = [
        { name: 'Placed', value: 65, color: '#10B981' },
        { name: 'Higher Studies', value: 20, color: '#3B82F6' },
        { name: 'Entrepreneurship', value: 5, color: '#F59E0B' },
        { name: 'Unplaced (Predicted)', value: 10, color: '#EF4444' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 flex items-center gap-2">
                        <Brain className="text-primary-600 dark:text-primary-400" />
                        AI Analytics & Insights
                    </h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Predictive modeling and data-driven insights</p>
                </div>
                <div className="flex gap-2">
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="px-4 py-2 border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        <option value="1m">Last Month</option>
                        <option value="6m">Last 6 Months</option>
                        <option value="1y">Last Year</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        <Download size={18} />
                        Export Report
                    </button>
                </div>
            </div>

            {/* AI Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-purple-100 font-medium mb-1">Predicted Pass Rate</h3>
                        <div className="text-3xl font-bold mb-2">94.2%</div>
                        <div className="flex items-center gap-1 text-sm text-purple-100 bg-white/20 w-fit px-2 py-1 rounded-full">
                            <TrendingUp size={14} />
                            <span>+2.5% vs last year</span>
                        </div>
                    </div>
                    <Brain className="absolute right-4 bottom-4 text-white/20 w-24 h-24" />
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-blue-100 font-medium mb-1">Placement Forecast</h3>
                        <div className="text-3xl font-bold mb-2">850+</div>
                        <div className="flex items-center gap-1 text-sm text-blue-100 bg-white/20 w-fit px-2 py-1 rounded-full">
                            <Target size={14} />
                            <span>High Confidence</span>
                        </div>
                    </div>
                    <Award className="absolute right-4 bottom-4 text-white/20 w-24 h-24" />
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-orange-100 font-medium mb-1">At-Risk Students</h3>
                        <div className="text-3xl font-bold mb-2">42</div>
                        <div className="flex items-center gap-1 text-sm text-orange-100 bg-white/20 w-fit px-2 py-1 rounded-full">
                            <AlertTriangle size={14} />
                            <span>Action Required</span>
                        </div>
                    </div>
                    <Users className="absolute right-4 bottom-4 text-white/20 w-24 h-24" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Student Performance Prediction */}
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6">Performance Forecast</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performanceData}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#F3F4F6' }}
                                />
                                <Legend />
                                <Area type="monotone" dataKey="actual" stroke="#3B82F6" fillOpacity={1} fill="url(#colorActual)" name="Actual Performance" />
                                <Area type="monotone" dataKey="predicted" stroke="#8B5CF6" strokeDasharray="5 5" fillOpacity={1} fill="url(#colorPredicted)" name="AI Prediction" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Placement Trends */}
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6">Placement Distribution (Predicted)</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={placementPrediction}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {placementPrediction.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#F3F4F6' }}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* At-Risk Students Table */}
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                <div className="p-6 border-b border-secondary-100 dark:border-secondary-800 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">At-Risk Students (AI Detected)</h3>
                    <button className="text-primary-600 dark:text-primary-400 text-sm font-bold hover:underline">View All</button>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                        <tr>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Student Name</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Course</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Risk Level</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Primary Factor</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                        {atRiskStudents.map((student) => (
                            <tr key={student.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                <td className="p-4 font-medium text-secondary-900 dark:text-secondary-100">{student.name}</td>
                                <td className="p-4 text-secondary-600 dark:text-secondary-400">{student.course}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${student.risk === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                        {student.risk}
                                    </span>
                                </td>
                                <td className="p-4 text-secondary-600 dark:text-secondary-400">{student.reason}</td>
                                <td className="p-4 text-right">
                                    <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline text-sm">Intervene</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
