import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Users, BookOpen, Bell, Settings, Shield, Activity, Database, Server
} from 'lucide-react';
import { adminUsers, students, faculty } from '../../data/mockData';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: 'Total Students', value: students.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Total Faculty', value: faculty.length, icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'System Users', value: adminUsers.length, icon: Shield, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'System Health', value: '98%', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    const quickActions = [
        { label: 'User Management', icon: Users, path: '/admin/users', desc: 'Manage roles & permissions' },
        { label: 'Academic Setup', icon: BookOpen, path: '/admin/academic', desc: 'Courses & Departments' },
        { label: 'Communication', icon: Bell, path: '/admin/communication', desc: 'Notices & Feedback' },
        { label: 'System Settings', icon: Settings, path: '/admin/settings', desc: 'Config & Backups' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900">System Administration</h1>
                <p className="text-secondary-500">Overview and configuration</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{stat.value}</h3>
                        <p className="text-secondary-500 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(action.path)}
                        className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 hover:border-primary-500 hover:shadow-md transition-all text-left group"
                    >
                        <div className="p-3 bg-secondary-50 rounded-lg w-fit mb-4 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                            <action.icon size={24} className="text-secondary-600 group-hover:text-primary-600" />
                        </div>
                        <h3 className="font-bold text-secondary-900 mb-1 group-hover:text-primary-700">{action.label}</h3>
                        <p className="text-sm text-secondary-500">{action.desc}</p>
                    </button>
                ))}
            </div>

            {/* System Health & Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <Server size={20} className="text-secondary-500" />
                        System Status
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium text-green-900">Database Service</span>
                            </div>
                            <span className="text-xs font-bold text-green-700">Operational</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium text-green-900">API Gateway</span>
                            </div>
                            <span className="text-xs font-bold text-green-700">Operational</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="font-medium text-yellow-900">Backup Service</span>
                            </div>
                            <span className="text-xs font-bold text-yellow-700">Scheduled (2 AM)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <Database size={20} className="text-secondary-500" />
                        Storage Usage
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-secondary-600">Database Size</span>
                                <span className="font-bold text-secondary-900">4.2 GB / 10 GB</span>
                            </div>
                            <div className="w-full bg-secondary-100 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-secondary-600">File Storage</span>
                                <span className="font-bold text-secondary-900">125 GB / 500 GB</span>
                            </div>
                            <div className="w-full bg-secondary-100 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-secondary-600">Backup Archive</span>
                                <span className="font-bold text-secondary-900">45 GB / 100 GB</span>
                            </div>
                            <div className="w-full bg-secondary-100 rounded-full h-2">
                                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
