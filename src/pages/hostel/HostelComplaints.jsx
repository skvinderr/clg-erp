import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hostelComplaints } from '../../data/mockData';
import {
    ArrowLeft, Plus, Wrench, CheckCircle, Clock
} from 'lucide-react';

const HostelComplaints = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const filteredComplaints = hostelComplaints.filter(c => filter === 'All' || c.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/hostel')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Maintenance & Complaints</h1>
                    <p className="text-secondary-500">Report and track facility issues</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-2 bg-secondary-50 p-1 rounded-lg">
                    {['All', 'Pending', 'Resolved'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === status
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-secondary-500 hover:text-secondary-700'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus size={18} />
                    <span>New Complaint</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredComplaints.map((complaint) => (
                    <div key={complaint.id} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${complaint.type === 'Electrical' ? 'bg-yellow-50 text-yellow-600' :
                                        complaint.type === 'Plumbing' ? 'bg-blue-50 text-blue-600' :
                                            'bg-gray-50 text-gray-600'
                                    }`}>
                                    <Wrench size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary-900">{complaint.type} Issue</h3>
                                    <p className="text-xs text-secondary-500">ID: {complaint.id}</p>
                                </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                                }`}>
                                {complaint.status === 'Pending' ? <Clock size={12} /> : <CheckCircle size={12} />}
                                {complaint.status}
                            </span>
                        </div>

                        <p className="text-secondary-700 mb-4">{complaint.description}</p>

                        <div className="pt-4 border-t border-secondary-100 flex justify-between items-center text-sm text-secondary-500">
                            <span>Reported on: {complaint.date}</span>
                            <span>By: {complaint.studentId}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HostelComplaints;
