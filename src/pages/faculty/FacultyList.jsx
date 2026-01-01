import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faculty } from '../../data/mockData';
import { Search, Filter, Plus, Mail, Phone, MapPin, Grid, List } from 'lucide-react';

const FacultyList = () => {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('All');

    const departments = ['All', ...new Set(faculty.map(f => f.department))];

    const filteredFaculty = faculty.filter(f => {
        const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            f.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            f.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = departmentFilter === 'All' || f.department === departmentFilter;
        return matchesSearch && matchesDept;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Faculty Directory</h1>
                    <p className="text-secondary-500">Manage and view all faculty members</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus size={20} />
                    <span>Add Faculty</span>
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, ID, or email..."
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                    <div className="relative min-w-[200px]">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                        <select
                            className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none bg-white"
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex border border-secondary-200 rounded-lg overflow-hidden">
                        <button
                            className={`p-2 ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600' : 'bg-white text-secondary-500'}`}
                            onClick={() => setViewMode('grid')}
                        >
                            <Grid size={20} />
                        </button>
                        <button
                            className={`p-2 ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'bg-white text-secondary-500'}`}
                            onClick={() => setViewMode('list')}
                        >
                            <List size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Faculty Grid/List */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFaculty.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => navigate(`/faculty/${member.id}`)}
                        >
                            <div className="p-6 flex flex-col items-center text-center border-b border-secondary-100">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-primary-50"
                                />
                                <h3 className="text-lg font-bold text-secondary-900">{member.name}</h3>
                                <p className="text-primary-600 font-medium">{member.designation}</p>
                                <p className="text-secondary-500 text-sm">{member.department}</p>
                            </div>
                            <div className="p-4 bg-secondary-50 space-y-2">
                                <div className="flex items-center gap-3 text-sm text-secondary-600">
                                    <Mail size={16} />
                                    <span className="truncate">{member.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-secondary-600">
                                    <Phone size={16} />
                                    <span>{member.phone}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-secondary-50 border-b border-secondary-200">
                                    <th className="p-4 font-semibold text-secondary-700">Name</th>
                                    <th className="p-4 font-semibold text-secondary-700">ID</th>
                                    <th className="p-4 font-semibold text-secondary-700">Department</th>
                                    <th className="p-4 font-semibold text-secondary-700">Designation</th>
                                    <th className="p-4 font-semibold text-secondary-700">Contact</th>
                                    <th className="p-4 font-semibold text-secondary-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFaculty.map((member) => (
                                    <tr
                                        key={member.id}
                                        className="border-b border-secondary-100 hover:bg-secondary-50 cursor-pointer"
                                        onClick={() => navigate(`/faculty/${member.id}`)}
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img src={member.photo} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                                                <div>
                                                    <p className="font-medium text-secondary-900">{member.name}</p>
                                                    <p className="text-xs text-secondary-500">{member.specialization}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-secondary-600">{member.id}</td>
                                        <td className="p-4 text-secondary-600">{member.department}</td>
                                        <td className="p-4 text-secondary-600">{member.designation}</td>
                                        <td className="p-4 text-secondary-600">
                                            <div className="flex flex-col text-sm">
                                                <span>{member.email}</span>
                                                <span className="text-xs">{member.phone}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyList;
