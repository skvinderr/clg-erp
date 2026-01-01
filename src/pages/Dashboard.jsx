import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Users, GraduationCap, DollarSign, BookOpen } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
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
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600 dark:text-green-400 font-medium">{trend}</span>
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
        return null; // Or a loading spinner while redirecting
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Dashboard Overview</h1>
                <p className="text-secondary-500 dark:text-secondary-400">Welcome back, here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Students"
                    value="2,543"
                    icon={Users}
                    color="bg-blue-500"
                    trend="+12%"
                />
                <StatCard
                    title="Total Faculty"
                    value="145"
                    icon={GraduationCap}
                    color="bg-purple-500"
                    trend="+4%"
                />
                <StatCard
                    title="Fees Collection"
                    value="$45,231"
                    icon={DollarSign}
                    color="bg-green-500"
                    trend="+8%"
                />
                <StatCard
                    title="Library Books"
                    value="12,450"
                    icon={BookOpen}
                    color="bg-orange-500"
                    trend="+2%"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 h-96 flex items-center justify-center text-secondary-400 dark:text-secondary-500">
                    Chart Placeholder (Attendance)
                </div>
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 h-96 flex items-center justify-center text-secondary-400 dark:text-secondary-500">
                    Chart Placeholder (Performance)
                </div>
            </div>
        </div>
    );
}
