import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield, Lock, FileText, Activity, AlertTriangle, CheckCircle, Eye
} from 'lucide-react';
import { auditLogs } from '../../../data/mockData';

const SecurityDashboard = () => {
    const navigate = useNavigate();

    const securityStats = [
        { label: 'Security Score', value: '85/100', icon: Shield, color: 'text-green-600', bg: 'bg-green-50', status: 'Good' },
        { label: 'Active Sessions', value: '124', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50', status: 'Normal' },
        { label: 'Failed Logins (24h)', value: '12', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50', status: 'Attention' },
        { label: 'Pending Audits', value: '3', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50', status: 'Action Required' },
    ];

    const quickLinks = [
        { title: 'Access Control', desc: 'Password policies & Roles', path: '/admin/security/access', icon: Lock },
        { title: 'Audit Logs', desc: 'View system activity', path: '/admin/security/audit', icon: Eye },
        { title: 'Data Privacy', desc: 'GDPR & Encryption', path: '/admin/security/privacy', icon: Shield },
        { title: 'Compliance', desc: 'Policies & Agreements', path: '/admin/security/compliance', icon: FileText },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Security & Compliance</h1>
                <p className="text-secondary-500 dark:text-secondary-400">Monitor and manage system security</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityStats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color} dark:bg-opacity-20`}>
                                <stat.icon size={24} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.status === 'Good' || stat.status === 'Normal' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                }`}>
                                {stat.status}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">{stat.value}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickLinks.map((link, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(link.path)}
                        className="flex items-center gap-4 p-6 bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md transition-all text-left group"
                    >
                        <div className="p-4 bg-secondary-50 dark:bg-secondary-800 rounded-full group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            <link.icon size={28} className="text-secondary-600 dark:text-secondary-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-secondary-900 dark:text-secondary-100 group-hover:text-primary-700 dark:group-hover:text-primary-400">{link.title}</h3>
                            <p className="text-secondary-500 dark:text-secondary-400">{link.desc}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Recent Alerts */}
            <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-4 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-orange-500" />
                    Recent Security Alerts
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg">
                        <AlertTriangle className="text-red-600 dark:text-red-400 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-red-900 dark:text-red-300">Multiple Failed Login Attempts</h4>
                            <p className="text-sm text-red-700 dark:text-red-400">IP 10.0.0.5 attempted to login 5 times in 1 minute.</p>
                            <p className="text-xs text-red-600 dark:text-red-400 mt-1">Today, 09:15 AM</p>
                        </div>
                        <button className="ml-auto text-sm font-bold text-red-700 dark:text-red-400 hover:underline">Block IP</button>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 rounded-lg">
                        <Activity className="text-yellow-600 dark:text-yellow-400 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-300">Unusual Traffic Spike</h4>
                            <p className="text-sm text-yellow-700 dark:text-yellow-400">Detected high API usage from Student Portal.</p>
                            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Yesterday, 04:00 PM</p>
                        </div>
                        <button className="ml-auto text-sm font-bold text-yellow-700 dark:text-yellow-400 hover:underline">Investigate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityDashboard;
