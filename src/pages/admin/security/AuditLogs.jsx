import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auditLogs } from '../../../data/mockData';
import {
    ArrowLeft, Search, Filter, Download, AlertCircle, CheckCircle
} from 'lucide-react';

const AuditLogs = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');

    const filteredLogs = auditLogs.filter(log => {
        const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.action.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'All' || log.role === filterRole;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin/security')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Audit Logs</h1>
                    <p className="text-secondary-500">Track system activity and security events</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <select
                        className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                    >
                        <option value="All">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Student">Student</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 border border-secondary-200 rounded-lg hover:bg-secondary-50 text-secondary-600">
                        <Download size={18} />
                        Export
                    </button>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-secondary-50 border-b border-secondary-200">
                        <tr>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Action</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">User</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Role</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Timestamp</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">IP Address</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-100">
                        {filteredLogs.map((log) => (
                            <tr key={log.id} className="hover:bg-secondary-50 transition-colors">
                                <td className="p-4 font-medium text-secondary-900">{log.action}</td>
                                <td className="p-4 text-secondary-600">{log.user}</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-bold">
                                        {log.role}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-secondary-500 font-mono">{log.timestamp}</td>
                                <td className="p-4 text-sm text-secondary-500 font-mono">{log.ip}</td>
                                <td className="p-4 text-right">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${log.status === 'Success' ? 'bg-green-100 text-green-700' :
                                            log.status === 'Failed' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {log.status === 'Success' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                        {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AuditLogs;
