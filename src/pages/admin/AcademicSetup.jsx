import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { academicYears, departments, courses } from '../../data/mockData';
import {
    ArrowLeft, Calendar, Book, Layers, Plus, Edit, Trash2
} from 'lucide-react';

const AcademicSetup = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Years');

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
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Academic Setup</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Configure years, departments, and courses</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-secondary-200 dark:border-secondary-800">
                <div className="flex gap-6">
                    {['Years', 'Departments', 'Courses'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === tab
                                ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                                : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">Manage {activeTab}</h2>
                    <button className="btn-primary flex items-center gap-2">
                        <Plus size={18} />
                        <span>Add New</span>
                    </button>
                </div>

                {activeTab === 'Years' && (
                    <div className="space-y-4">
                        {academicYears.map((year) => (
                            <div key={year.id} className="flex items-center justify-between p-4 border border-secondary-200 dark:border-secondary-800 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800/50">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary-900 dark:text-secondary-100">{year.name}</h3>
                                        <p className="text-sm text-secondary-500 dark:text-secondary-400">{year.startDate} - {year.endDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${year.status === 'Current' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-600'
                                        }`}>
                                        {year.status}
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="text-blue-600 hover:bg-blue-50 p-2 rounded"><Edit size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'Departments' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {departments.map((dept) => (
                            <div key={dept.id} className="p-4 border border-secondary-200 dark:border-secondary-800 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                            <Layers size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-secondary-900 dark:text-secondary-100">{dept.name}</h3>
                                            <p className="text-xs text-secondary-500 dark:text-secondary-400">Code: {dept.code}</p>
                                        </div>
                                    </div>
                                    <button className="text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"><Edit size={16} /></button>
                                </div>
                                <div className="mt-4 flex justify-between text-sm text-secondary-600 dark:text-secondary-400">
                                    <span>Head: {dept.head}</span>
                                    <span>{dept.studentCount} Students</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'Courses' && (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                                <tr>
                                    <th className="p-3 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Code</th>
                                    <th className="p-3 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Name</th>
                                    <th className="p-3 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Credits</th>
                                    <th className="p-3 text-sm font-semibold text-secondary-600 dark:text-secondary-300">Type</th>
                                    <th className="p-3 text-sm font-semibold text-secondary-600 dark:text-secondary-300 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                                {courses.map((course) => (
                                    <tr key={course.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50">
                                        <td className="p-3 font-mono text-sm text-secondary-900 dark:text-secondary-100">{course.code}</td>
                                        <td className="p-3 font-medium text-secondary-900 dark:text-secondary-100">{course.name}</td>
                                        <td className="p-3 text-secondary-600 dark:text-secondary-400">{course.credits}</td>
                                        <td className="p-3">
                                            <span className="px-2 py-0.5 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded text-xs font-bold">
                                                {course.type}
                                            </span>
                                        </td>
                                        <td className="p-3 text-right">
                                            <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm mr-3">Edit</button>
                                            <button className="text-red-600 dark:text-red-400 hover:underline text-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AcademicSetup;
