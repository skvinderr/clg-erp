import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { placementCompanies, placementDrives } from '../../data/mockData';
import {
    ArrowLeft, Plus, Building, MapPin, Phone, Mail, Calendar
} from 'lucide-react';

const CompanyManagement = () => {
    const navigate = useNavigate();
    const [showAddModal, setShowAddModal] = useState(false);

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
                    <h1 className="text-2xl font-bold text-secondary-900">Company Management</h1>
                    <p className="text-secondary-500">Manage partners and recruitment drives</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={() => setShowAddModal(true)}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} />
                    <span>Add Company</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {placementCompanies.map((company) => {
                    const drives = placementDrives.filter(d => d.companyId === company.id);

                    return (
                        <div key={company.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                            <div className="p-6 border-b border-secondary-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center font-bold text-2xl text-secondary-600">
                                            {company.name.substring(0, 2)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-secondary-900">{company.name}</h3>
                                            <p className="text-secondary-500">{company.industry}</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                        Active Partner
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-secondary-600">
                                        <MapPin size={16} />
                                        <span>{company.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary-600">
                                        <Building size={16} />
                                        <span>{company.industry}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary-600">
                                        <Mail size={16} />
                                        <span className="truncate">{company.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary-600">
                                        <Phone size={16} />
                                        <span>{company.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-secondary-50">
                                <h4 className="font-bold text-secondary-900 mb-3 flex items-center gap-2">
                                    <Calendar size={16} className="text-primary-600" />
                                    Recruitment Drives
                                </h4>
                                {drives.length > 0 ? (
                                    <div className="space-y-2">
                                        {drives.map(drive => (
                                            <div key={drive.id} className="bg-white p-3 rounded border border-secondary-200 flex justify-between items-center">
                                                <div>
                                                    <p className="font-medium text-secondary-900">{drive.date}</p>
                                                    <p className="text-xs text-secondary-500">{drive.rounds.length} Rounds • {drive.venue}</p>
                                                </div>
                                                <button className="text-primary-600 text-sm font-medium hover:underline">
                                                    View Details
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-secondary-500 italic">No drives scheduled yet.</p>
                                )}
                                <button className="w-full mt-4 py-2 border border-secondary-300 rounded-lg text-secondary-600 font-medium hover:bg-white transition-colors">
                                    Schedule Drive
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CompanyManagement;
