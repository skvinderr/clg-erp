import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    Users, GraduationCap, DollarSign, BookOpen,
    TrendingUp, Calendar, Bell, Plus, ArrowRight,
    Activity, FileText, CreditCard
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

// Mock Data
const attendanceData = [
    { name: 'Mon', students: 95, faculty: 98 },
    { name: 'Tue', students: 92, faculty: 96 },
    { name: 'Wed', students: 96, faculty: 98 },
    { name: 'Thu', students: 91, faculty: 95 },
    { name: 'Fri', students: 88, faculty: 92 },
    { name: 'Sat', students: 85, faculty: 90 },
];

const financeData = [
    { name: 'Jan', income: 4000, expense: 2400 },
    { name: 'Feb', income: 3000, expense: 1398 },
    { name: 'Mar', income: 2000, expense: 9800 },
    { name: 'Apr', income: 2780, expense: 3908 },
    { name: 'May', income: 1890, expense: 4800 },
    { name: 'Jun', income: 2390, expense: 3800 },
];

const departmentData = [
    { name: 'CSE', value: 400 },
    { name: 'ECE', value: 300 },
    { name: 'MECH', value: 300 },
    { name: 'CIVIL', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentActivities = [
    { id: 1, user: 'Dr. Sarah Wilson', action: 'uploaded marks', target: 'CS-101 Mid Terms', time: '2 hours ago', icon: FileText, color: 'text-blue-500 bg-blue-50' },
    { id: 2, user: 'Admin', action: 'posted notice', target: 'Holiday Declaration', time: '4 hours ago', icon: Bell, color: 'text-orange-500 bg-orange-50' },
    { id: 3, user: 'System', action: 'backup completed', target: 'Daily Database Backup', time: '5 hours ago', icon: Activity, color: 'text-green-500 bg-green-50' },
    { id: 4, user: 'Accounts', action: 'processed salary', target: 'Faculty Payroll', time: '1 day ago', icon: DollarSign, color: 'text-purple-500 bg-purple-50' },
];

const upcomingEvents = [
    { id: 1, title: 'Annual Sports Day', date: '15 Jan 2026', type: 'Event' },
    { id: 2, title: 'Mid-Semester Exams', date: '20 Jan 2026', type: 'Exam' },
    { id: 3, title: 'Parent-Teacher Meet', date: '25 Jan 2026', type: 'Meeting' },
];

const StatCard = ({ title, value, icon: Icon, color, trend, trendUp }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800"
    >
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-secondary-500 dark:text-secondary-400">{title}</p>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mt-1">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            <span className={`${trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} font-medium flex items-center`}>
                {trendUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 transform rotate-180" />}
                {trend}
            </span>
            <span className="text-secondary-400 dark:text-secondary-500 ml-2">vs last month</span>
        </div>
    </motion.div>
);

export default function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role === 'Faculty') {
            navigate('/faculty-dashboard');
        } else if (user?.role === 'Student') {
            navigate('/student-portal');
        }
    }, [user, navigate]);

    if (user?.role !== 'Admin') {
        return null;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Dashboard Overview</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                        <Plus className="w-4 h-4" /> New Admission
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-700 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors text-sm font-medium">
                        <Calendar className="w-4 h-4" /> View Calendar
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Students"
                    value="2,543"
                    icon={Users}
                    color="bg-blue-500"
                    trend="+12%"
                    trendUp={true}
                />
                <StatCard
                    title="Total Faculty"
                    value="145"
                    icon={GraduationCap}
                    color="bg-purple-500"
                    trend="+4%"
                    trendUp={true}
                />
                <StatCard
                    title="Fees Collection"
                    value="$45,231"
                    icon={DollarSign}
                    color="bg-green-500"
                    trend="+8%"
                    trendUp={true}
                />
                <StatCard
                    title="Library Books"
                    value="12,450"
                    icon={BookOpen}
                    color="bg-orange-500"
                    trend="+2%"
                    trendUp={true}
                />
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Attendance Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-6">Attendance Overview</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={attendanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                                <XAxis dataKey="name" stroke="#6B7280" />
                                <YAxis stroke="#6B7280" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#F3F4F6' }}
                                    itemStyle={{ color: '#F3F4F6' }}
                                />
                                <Legend />
                                <Bar dataKey="students" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Students" />
                                <Bar dataKey="faculty" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="Faculty" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Department Distribution */}
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-6">Student Distribution</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={departmentData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {departmentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#F3F4F6' }}
                                    itemStyle={{ color: '#F3F4F6' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">Recent Activity</h3>
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">View All</button>
                    </div>
                    <div className="space-y-6">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-4">
                                <div className={`p-2 rounded-lg ${activity.color} shrink-0`}>
                                    <activity.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                                        <span className="font-bold">{activity.user}</span> {activity.action} <span className="text-primary-600">{activity.target}</span>
                                    </p>
                                    <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events & Quick Actions */}
                <div className="space-y-6">
                    {/* Upcoming Events */}
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-4">Upcoming Events</h3>
                        <div className="space-y-4">
                            {upcomingEvents.map((event) => (
                                <div key={event.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors cursor-pointer">
                                    <div className="text-center min-w-[3rem] p-2 bg-white dark:bg-secondary-700 rounded-lg shadow-sm">
                                        <span className="block text-xs font-bold text-primary-600 uppercase">{event.date.split(' ')[1]}</span>
                                        <span className="block text-lg font-bold text-secondary-900 dark:text-secondary-100">{event.date.split(' ')[0]}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-secondary-900 dark:text-secondary-100">{event.title}</h4>
                                        <span className="text-xs text-secondary-500 dark:text-secondary-400">{event.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 rounded-xl shadow-lg text-white">
                        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors text-left flex flex-col gap-2">
                                <CreditCard className="w-5 h-5" />
                                Collect Fees
                            </button>
                            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors text-left flex flex-col gap-2">
                                <Bell className="w-5 h-5" />
                                Send Notice
                            </button>
                            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors text-left flex flex-col gap-2">
                                <FileText className="w-5 h-5" />
                                Reports
                            </button>
                            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors text-left flex flex-col gap-2">
                                <Activity className="w-5 h-5" />
                                System Health
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
