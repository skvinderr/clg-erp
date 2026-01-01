import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';
import { students } from '../../data/mockData';

export default function StudentList() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBranch, setFilterBranch] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');

    const filteredStudents = students.filter(student => {
        const matchesSearch =
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesBranch = filterBranch === 'All' || student.branch === filterBranch;
        const matchesStatus = filterStatus === 'All' || student.status === filterStatus;

        return matchesSearch && matchesBranch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Inactive': return 'bg-gray-100 text-gray-800';
            case 'Probation': return 'bg-red-100 text-red-800';
            default: return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Students</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Manage student records and admissions</p>
                </div>
                <button
                    onClick={() => navigate('/students/add')}
                    className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                    <Plus size={20} />
                    Add Student
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-secondary-900 p-4 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, roll no, or email..."
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <select
                        className="px-4 py-2 border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={filterBranch}
                        onChange={(e) => setFilterBranch(e.target.value)}
                    >
                        <option value="All">All Branches</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Civil">Civil</option>
                    </select>

                    <select
                        className="px-4 py-2 border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Probation">Probation</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                                <th className="px-6 py-4 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Student</th>
                                <th className="px-6 py-4 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Roll No</th>
                                <th className="px-6 py-4 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Branch</th>
                                <th className="px-6 py-4 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Status</th>
                                <th className="px-6 py-4 text-sm font-semibold text-secondary-600 dark:text-secondary-300">CGPA</th>
                                <th className="px-6 py-4 text-sm font-semibold text-secondary-600 dark:text-secondary-300 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={student.photo}
                                                alt={student.name}
                                                className="w-10 h-10 rounded-full object-cover border border-secondary-200 dark:border-secondary-700"
                                            />
                                            <div>
                                                <p className="font-medium text-secondary-900 dark:text-secondary-100">{student.name}</p>
                                                <p className="text-xs text-secondary-500 dark:text-secondary-400">{student.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-secondary-600 dark:text-secondary-400">{student.rollNumber}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-600 dark:text-secondary-400">
                                        {student.branch}
                                        <span className="block text-xs text-secondary-400 dark:text-secondary-500">Sem {student.semester}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-secondary-900 dark:text-secondary-100 font-medium">{student.academics.cgpa}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => navigate(`/students/${student.id}`)}
                                                className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                                                title="View Profile"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 text-secondary-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                                                <Edit size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Mock */}
                <div className="px-6 py-4 border-t border-secondary-200 dark:border-secondary-800 flex justify-between items-center">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">Showing {filteredStudents.length} of {students.length} students</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-secondary-200 dark:border-secondary-700 rounded-lg text-sm text-secondary-600 dark:text-secondary-400 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-secondary-200 dark:border-secondary-700 rounded-lg text-sm text-secondary-600 dark:text-secondary-400">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
