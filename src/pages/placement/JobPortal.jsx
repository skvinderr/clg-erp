import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { placementJobs, placementCompanies } from '../../data/mockData';
import {
    ArrowLeft, Search, Filter, Briefcase, MapPin, DollarSign, Clock
} from 'lucide-react';

const JobPortal = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = placementJobs.filter(job => {
        const company = placementCompanies.find(c => c.id === job.companyId);
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company?.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || job.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/placement')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Job Portal</h1>
                    <p className="text-secondary-500">Explore and apply for opportunities</p>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by role or company..."
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 bg-secondary-50 p-1 rounded-lg w-full md:w-auto overflow-x-auto">
                    {['All', 'Full Time', 'Internship'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${filter === type
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-secondary-500 hover:text-secondary-700'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job List */}
            <div className="grid grid-cols-1 gap-4">
                {filteredJobs.map((job) => {
                    const company = placementCompanies.find(c => c.id === job.companyId);

                    return (
                        <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 hover:border-primary-300 transition-all group">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center font-bold text-2xl text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                                        {company?.name.substring(0, 2)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-secondary-900 group-hover:text-primary-700 transition-colors">{job.title}</h3>
                                        <p className="text-secondary-600 font-medium">{company?.name}</p>

                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-secondary-500">
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{company?.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Briefcase size={14} />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <DollarSign size={14} />
                                                <span>{job.package}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-orange-600">
                                                <Clock size={14} />
                                                <span>Deadline: {job.deadline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                                    <button className="btn-primary w-full md:w-auto">Apply Now</button>
                                    <span className="text-xs text-secondary-400">Posted 2 days ago</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-secondary-100">
                                <p className="text-secondary-600 text-sm line-clamp-2">{job.description}</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-xs font-bold text-secondary-500">Eligibility:</span>
                                    <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                                        {job.eligibility}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-12 text-secondary-500 bg-white rounded-xl border border-secondary-200">
                        <Briefcase size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="text-lg font-medium">No jobs found matching your criteria.</p>
                        <button onClick={() => { setFilter('All'); setSearchTerm(''); }} className="mt-2 text-primary-600 hover:underline">
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobPortal;
