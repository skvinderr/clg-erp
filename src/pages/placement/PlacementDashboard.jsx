import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { placementCompanies, placementJobs, placementDrives, studentApplications } from '../../data/mockData';
import {
    Briefcase, Building, Users, TrendingUp, Calendar,
    CheckCircle, Clock, FileText
} from 'lucide-react';

const PlacementDashboard = () => {
    const { user, hasRole } = useAuth();
    const navigate = useNavigate();

    // Admin View
    if (hasRole(['Admin'])) {
        const totalCompanies = placementCompanies.length;
        const activeJobs = placementJobs.length;
        const upcomingDrives = placementDrives.length;
        const totalApplications = studentApplications.length;

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900">Placement Cell</h1>
                        <p className="text-secondary-500">Manage recruitment drives and student placements</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/placement/companies')}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <Building size={18} />
                            <span>Companies</span>
                        </button>
                        <button
                            onClick={() => navigate('/placement/jobs')}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Briefcase size={18} />
                            <span>Post Job</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Building size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{totalCompanies}</h3>
                        <p className="text-secondary-500 text-sm">Partner Companies</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <Briefcase size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{activeJobs}</h3>
                        <p className="text-secondary-500 text-sm">Active Job Openings</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <Calendar size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{upcomingDrives}</h3>
                        <p className="text-secondary-500 text-sm">Upcoming Drives</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                <FileText size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{totalApplications}</h3>
                        <p className="text-secondary-500 text-sm">Total Applications</p>
                    </div>
                </div>

                {/* Recent Drives */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 bg-secondary-50 flex justify-between items-center">
                        <h3 className="font-bold text-secondary-900">Upcoming Recruitment Drives</h3>
                        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">View All</button>
                    </div>
                    <div className="divide-y divide-secondary-100">
                        {placementDrives.map((drive) => {
                            const company = placementCompanies.find(c => c.id === drive.companyId);
                            return (
                                <div key={drive.id} className="p-4 flex items-center justify-between hover:bg-secondary-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center font-bold text-secondary-600">
                                            {company?.name.substring(0, 2)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary-900">{company?.name}</h4>
                                            <p className="text-sm text-secondary-500">{drive.venue} • {drive.time}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-secondary-900">{drive.date}</p>
                                        <p className="text-xs text-secondary-500">{drive.rounds.length} Rounds</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Student View
    const studentId = 'STU001'; // Mock ID
    const myApplications = studentApplications.filter(a => a.studentId === studentId);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Placement Portal</h1>
                    <p className="text-secondary-500">Find your dream career</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/placement/profile')}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <FileText size={18} />
                        <span>My Resume</span>
                    </button>
                    <button
                        onClick={() => navigate('/placement/jobs')}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Briefcase size={18} />
                        <span>Browse Jobs</span>
                    </button>
                </div>
            </div>

            {/* Stats & Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-2">My Applications</h3>
                    <div className="text-3xl font-bold text-primary-600 mb-1">{myApplications.length}</div>
                    <p className="text-sm text-secondary-500">Jobs Applied</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-2">Interviews</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">0</div>
                    <p className="text-sm text-secondary-500">Scheduled</p>
                </div>

                <div
                    onClick={() => navigate('/placement/training')}
                    className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 rounded-xl shadow-md text-white cursor-pointer hover:shadow-lg transition-shadow"
                >
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <TrendingUp size={20} />
                        Skill Up
                    </h3>
                    <p className="text-primary-100 text-sm mb-4">Prepare for interviews with mock tests and workshops.</p>
                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Start Learning →</span>
                </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="p-4 border-b border-secondary-200 bg-secondary-50">
                    <h3 className="font-bold text-secondary-900">Application Status</h3>
                </div>
                <div className="divide-y divide-secondary-100">
                    {myApplications.map((app) => {
                        const job = placementJobs.find(j => j.id === app.jobId);
                        const company = placementCompanies.find(c => c.id === job?.companyId);

                        return (
                            <div key={app.id} className="p-4 flex items-center justify-between hover:bg-secondary-50">
                                <div>
                                    <h4 className="font-bold text-secondary-900">{job?.title}</h4>
                                    <p className="text-sm text-secondary-500">{company?.name}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${app.status === 'Shortlisted' ? 'bg-green-100 text-green-700' :
                                            app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                'bg-blue-100 text-blue-700'
                                        }`}>
                                        {app.status}
                                    </span>
                                    <p className="text-xs text-secondary-400 mt-1">Applied: {app.appliedDate}</p>
                                </div>
                            </div>
                        );
                    })}
                    {myApplications.length === 0 && (
                        <div className="p-8 text-center text-secondary-500">
                            <p>You haven't applied to any jobs yet.</p>
                            <button onClick={() => navigate('/placement/jobs')} className="text-primary-600 font-medium hover:underline mt-2">
                                Explore Opportunities
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlacementDashboard;
