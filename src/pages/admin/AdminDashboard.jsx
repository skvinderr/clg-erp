import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Users, GraduationCap, Shield, BookOpen, Bell, Settings, Activity, Layout
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isCustomizing, setIsCustomizing] = useState(false);
    const [visibleWidgets, setVisibleWidgets] = useState({
        stats: true,
        quickActions: true,
        systemStatus: true,
        storage: true
    });

    const toggleWidget = (key) => {
        setVisibleWidgets(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const stats = [
        { label: 'Total Students', value: '10', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', path: '/students' },
        { label: 'Total Faculty', value: '10', icon: GraduationCap, color: 'text-green-600', bg: 'bg-green-50', path: '/faculty' },
        { label: 'System Users', value: '2', icon: Shield, color: 'text-purple-600', bg: 'bg-purple-50', path: '/admin/users' },
        { label: 'System Health', value: '98%', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-50', path: '/admin/reports' },
    ];

    const quickActions = [
        { title: 'User Management', desc: 'Manage roles & permissions', icon: Users, path: '/admin/users' },
        { title: 'Academic Setup', desc: 'Courses & Departments', icon: BookOpen, path: '/admin/academic' },
        { title: 'Communication', desc: 'Notices & Feedback', icon: Bell, path: '/admin/communication' },
        { title: 'System Settings', desc: 'Config & Backups', icon: Settings, path: '/admin/settings' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <Breadcrumbs />
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">System Administration</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Overview and configuration</p>
                </div>
                <button
                    onClick={() => setIsCustomizing(!isCustomizing)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isCustomizing
                            ? 'bg-primary-600 text-white'
                            : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-700'
                        }`}
                >
                    <Layout size={18} />
                    {isCustomizing ? 'Done Customizing' : 'Customize Dashboard'}
                </button>
            </div>

            {isCustomizing && (
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl border border-primary-100 dark:border-primary-800 mb-6 animate-in fade-in slide-in-from-top-4">
                    <h3 className="font-bold text-primary-900 dark:text-primary-100 mb-3">Widget Visibility</h3>
                    <div className="flex flex-wrap gap-4">
                        {Object.keys(visibleWidgets).map(key => (
                            <label key={key} className="flex items-center gap-2 cursor-pointer bg-white dark:bg-secondary-800 px-3 py-2 rounded-lg border border-secondary-200 dark:border-secondary-700">
                                <input
                                    type="checkbox"
                                    checked={visibleWidgets[key]}
                                    onChange={() => toggleWidget(key)}
                                    className="rounded text-primary-600 focus:ring-primary-500"
                                />
                                <span className="capitalize text-secondary-700 dark:text-secondary-300">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {visibleWidgets.stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(stat.path)}
                            className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:shadow-md transition-all cursor-pointer group"
                        >
                            <div className={`w-12 h-12 ${stat.bg} dark:bg-secondary-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <stat.icon className={`${stat.color} dark:text-secondary-100`} size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">{stat.value}</h3>
                            <p className="text-secondary-500 dark:text-secondary-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            )}

            {visibleWidgets.quickActions && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickActions.map((action, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(action.path)}
                            className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-500 dark:hover:border-primary-500 cursor-pointer transition-colors text-center group"
                        >
                            <div className="w-12 h-12 bg-secondary-50 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                                <action.icon className="text-secondary-600 dark:text-secondary-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" size={24} />
                            </div>
                            <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-1">{action.title}</h3>
                            <p className="text-sm text-secondary-500 dark:text-secondary-400">{action.desc}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {visibleWidgets.systemStatus && (
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-4 flex items-center gap-2">
                            <Activity className="text-green-600" />
                            System Status
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <span className="font-medium text-green-900 dark:text-green-100">Database Service</span>
                                <span className="text-xs font-bold bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-100 px-2 py-1 rounded">Operational</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <span className="font-medium text-green-900 dark:text-green-100">API Gateway</span>
                                <span className="text-xs font-bold bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-100 px-2 py-1 rounded">Operational</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                <span className="font-medium text-yellow-900 dark:text-yellow-100">Storage Server</span>
                                <span className="text-xs font-bold bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">High Load</span>
                            </div>
                        </div>
                    </div>
                )}

                {visibleWidgets.storage && (
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-4 flex items-center gap-2">
                            <Settings className="text-blue-600" />
                            Storage Usage
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-secondary-700 dark:text-secondary-300">Database Size</span>
                                    <span className="font-bold text-secondary-900 dark:text-secondary-100">4.2 GB / 10 GB</span>
                                </div>
                                <div className="w-full bg-secondary-100 dark:bg-secondary-800 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-secondary-700 dark:text-secondary-300">File Storage</span>
                                    <span className="font-bold text-secondary-900 dark:text-secondary-100">125 GB / 500 GB</span>
                                </div>
                                <div className="w-full bg-secondary-100 dark:bg-secondary-800 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-secondary-700 dark:text-secondary-300">Backup Storage</span>
                                    <span className="font-bold text-secondary-900 dark:text-secondary-100">45 GB / 100 GB</span>
                                </div>
                                <div className="w-full bg-secondary-100 dark:bg-secondary-800 rounded-full h-2">
                                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
