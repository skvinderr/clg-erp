import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminUsers, students, faculty } from '../../data/mockData';
import {
    ArrowLeft, Search, Plus, User, Shield, MoreVertical, Edit, Trash2, Lock
} from 'lucide-react';

const UserManagement = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Admin');
    const [searchTerm, setSearchTerm] = useState('');

    // Combine all users for display logic (in a real app, these would be separate API calls)
    const getUsers = () => {
        switch (activeTab) {
            case 'Admin': return adminUsers;
            case 'Student': return students;
            case 'Faculty': return faculty;
            default: return [];
        }
    };

    const users = getUsers().filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin')}
                    className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600 dark:text-secondary-400" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">User Management</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Manage access and permissions</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white dark:bg-secondary-900 p-4 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2 bg-secondary-50 dark:bg-secondary-800 p-1 rounded-lg">
                    {['Admin', 'Faculty', 'Student'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab
                                ? 'bg-white dark:bg-secondary-700 text-primary-600 dark:text-primary-400 shadow-sm'
                                : 'text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-200'
                                }`}
                        >
                            {tab}s
                        </button>
                    ))}
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full pl-10 pr-4 py-2 border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                        <Plus size={18} />
                        <span>Add User</span>
                    </button>
                </div>
            </div>

            {/* User List */}
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                        <tr>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">User</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Role</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Status</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Last Login</th>
                            <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-secondary-900 dark:text-secondary-100">{user.name}</p>
                                            <p className="text-xs text-secondary-500 dark:text-secondary-400">{user.email || 'N/A'}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="flex items-center gap-1 text-sm text-secondary-600 dark:text-secondary-400">
                                        <Shield size={14} />
                                        {user.role || activeTab}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Inactive' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                        {user.status || 'Active'}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-secondary-500 dark:text-secondary-400">
                                    {user.lastLogin || 'Never'}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 hover:bg-secondary-200 dark:hover:bg-secondary-800 rounded text-secondary-500 dark:text-secondary-400" title="Reset Password">
                                            <Lock size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-secondary-200 dark:hover:bg-secondary-800 rounded text-blue-600 dark:text-blue-400" title="Edit">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded text-red-600 dark:text-red-400" title="Delete">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {users.length === 0 && (
                    <div className="p-8 text-center text-secondary-500">
                        No users found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserManagement;
