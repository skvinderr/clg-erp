import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    Users, GraduationCap, DollarSign, BookOpen,
    TrendingUp, Calendar, Bell, Plus, ArrowRight,
    MoreHorizontal, Clock, CheckCircle2, FileText
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';

// Mock Data
const admissionTrend = [
    { name: 'Mon', count: 12 },
    { name: 'Tue', count: 19 },
    { name: 'Wed', count: 15 },
    { name: 'Thu', count: 22 },
    { name: 'Fri', count: 28 },
    { name: 'Sat', count: 18 },
];

const feeStatusData = [
    { name: 'Paid', value: 65 },
    { name: 'Pending', value: 35 },
];
const COLORS = ['#10B981', '#E5E7EB'];

// Kanban Data
const pipeline = {
    new: [
        { id: 1, name: "Rahul Sharma", course: "B.Tech CSE", date: "12 Mar" },
        { id: 2, name: "Priya Patel", course: "MBA", date: "14 Mar" }
    ],
    review: [
        { id: 3, name: "Amit Kumar", course: "B.CA", date: "10 Mar" },
        { id: 4, name: "Sneha Gupta", course: "B.Tech ME", date: "09 Mar" }
    ],
    interview: [
        { id: 5, name: "Vikram Singh", course: "MBA", date: "08 Mar" }
    ],
    admitted: [
        { id: 6, name: "Anjali Rao", course: "B.Tech CSE", date: "01 Mar" }
    ]
};

const StatCard = ({ title, value, trend, trendUp, data }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-48"
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{value}</h3>
            </div>
            <div className={`p-2 rounded-lg ${trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                <TrendingUp className={`w-5 h-5 ${!trendUp && 'rotate-180'}`} />
            </div>
        </div>

        <div className="mt-4">
            <div className="h-16 -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <Bar dataKey="count" fill={trendUp ? "#3B82F6" : "#EF4444"} radius={[4, 4, 0, 0]} barSize={6} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 mt-2">
                <span className={trendUp ? "text-green-500 font-medium" : "text-red-500 font-medium"}>{trend}</span> vs last week
            </p>
        </div>
    </motion.div>
);

const PipelineCard = ({ name, course, date }) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 mb-3 hover:shadow-md transition-shadow cursor-pointer group">
        <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm group-hover:text-blue-600 transition-colors">{name}</h4>
            <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
        </div>
        <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md font-medium">{course}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {date}
            </div>
            <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 2d ago
            </div>
        </div>
    </div>
);

export default function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role === 'Faculty') navigate('/faculty-dashboard');
        else if (user?.role === 'Student') navigate('/student-portal');
    }, [user, navigate]);

    if (user?.role !== 'Admin') return null;

    return (
        <div className="space-y-8">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Monitor campus performance and admissions pipeline.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium shadow-sm">
                        <Calendar className="w-4 h-4" /> Academic Year
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-slate-200 dark:shadow-blue-900/20">
                        <Plus className="w-4 h-4" /> New Admission
                    </button>
                </div>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Students"
                    value="2,543"
                    trend="+12%"
                    trendUp={true}
                    data={admissionTrend}
                />

                {/* Fee Collection Gauge Card - Specialized Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-900 dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between h-48 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 w-full flex justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-300">Fee Collection</p>
                            <h3 className="text-3xl font-bold text-white mt-2">65%</h3>
                        </div>
                        <div className="w-16 h-16">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={feeStatusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={25}
                                        outerRadius={35}
                                        startAngle={180}
                                        endAngle={0}
                                        paddingAngle={0}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        <Cell key="cell-0" fill="#3B82F6" />
                                        <Cell key="cell-1" fill="#334155" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Collected</span>
                            <span className="text-white font-medium">$45,231</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-slate-400 mt-3">Target: $70k for Q1</p>
                    </div>
                </motion.div>

                <div className="md:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-900 dark:text-white">Admission Trend</h3>
                        <select className="bg-slate-50 dark:bg-slate-700 border-none text-xs rounded-lg px-2 py-1 text-slate-600 dark:text-slate-300 outline-none">
                            <option>This Week</option>
                            <option>Last Month</option>
                        </select>
                    </div>
                    <div className="flex-1 min-h-[100px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={admissionTrend} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1E293B', borderRadius: '8px', border: 'none', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Kanban / Pipeline Section */}
            <div>
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Admissions Pipeline</h3>
                        <p className="text-sm text-slate-500">Track student applications status</p>
                    </div>
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View Full Board &rarr;</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* New Applications */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                        <div className="flex justify-between items-center mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">New Applied</h4>
                            </div>
                            <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">12</span>
                        </div>
                        {pipeline.new.map(p => <PipelineCard key={p.id} {...p} />)}
                        <button className="w-full py-2 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 transition-colors mt-2">
                            + Add Candidate
                        </button>
                    </div>

                    {/* Document Review */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                        <div className="flex justify-between items-center mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Reviewing</h4>
                            </div>
                            <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">4</span>
                        </div>
                        {pipeline.review.map(p => <PipelineCard key={p.id} {...p} />)}
                    </div>

                    {/* Interview */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                        <div className="flex justify-between items-center mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Interview</h4>
                            </div>
                            <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">3</span>
                        </div>
                        {pipeline.interview.map(p => <PipelineCard key={p.id} {...p} />)}
                    </div>

                    {/* Admitted */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                        <div className="flex justify-between items-center mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Admitted</h4>
                            </div>
                            <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">8</span>
                        </div>
                        {pipeline.admitted.map(p => <PipelineCard key={p.id} {...p} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}
