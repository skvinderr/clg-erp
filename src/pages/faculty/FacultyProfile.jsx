import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { faculty } from '../../data/mockData';
import {
    User, BookOpen, Award, DollarSign, Calendar, Mail, Phone, MapPin,
    Briefcase, GraduationCap, FileText, Star, ArrowLeft
} from 'lucide-react';

const FacultyProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const member = faculty.find(f => f.id === id);
    const [activeTab, setActiveTab] = useState('profile');

    if (!member) {
        return <div className="p-6">Faculty member not found</div>;
    }

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'academic', label: 'Academic', icon: BookOpen },
        { id: 'research', label: 'Research', icon: FileText },
        { id: 'admin', label: 'Administrative', icon: Briefcase },
    ];

    return (
        <div className="space-y-6">
            <button
                onClick={() => navigate('/faculty')}
                className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Back to Directory</span>
            </button>

            {/* Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-800"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12 mb-6">
                        <div className="flex items-end gap-6">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-md"
                            />
                            <div className="mb-1">
                                <h1 className="text-3xl font-bold text-secondary-900">{member.name}</h1>
                                <p className="text-lg text-secondary-600">{member.designation} • {member.department}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="btn-secondary">Edit Profile</button>
                            <button className="btn-primary">Contact</button>
                        </div>
                    </div>

                    <div className="flex gap-8 border-b border-secondary-200">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${activeTab === tab.id
                                        ? 'border-primary-600 text-primary-600 font-medium'
                                        : 'border-transparent text-secondary-500 hover:text-secondary-700'
                                    }`}
                            >
                                <tab.icon size={18} />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Quick Info (Always Visible) */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 space-y-4">
                        <h3 className="font-bold text-secondary-900 mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-secondary-600">
                                <Mail size={18} className="text-primary-500" />
                                <span>{member.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-secondary-600">
                                <Phone size={18} className="text-primary-500" />
                                <span>{member.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-secondary-600">
                                <Calendar size={18} className="text-primary-500" />
                                <span>Joined: {new Date(member.joinDate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h3 className="font-bold text-secondary-900 mb-4">Performance</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl font-bold text-secondary-900">{member.performance.rating}</div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(member.performance.rating) ? "currentColor" : "none"} />
                                    ))}
                                </div>
                                <span className="text-sm text-secondary-500">{member.performance.reviews} Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Dynamic Content */}
                <div className="lg:col-span-2 space-y-6">
                    {activeTab === 'profile' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <GraduationCap className="text-primary-500" />
                                    Qualifications
                                </h3>
                                <div className="space-y-4">
                                    {member.qualifications.map((qual, idx) => (
                                        <div key={idx} className="flex justify-between items-start p-3 bg-secondary-50 rounded-lg">
                                            <div>
                                                <p className="font-semibold text-secondary-900">{qual.degree}</p>
                                                <p className="text-secondary-600">{qual.institute}</p>
                                            </div>
                                            <span className="text-sm font-medium text-secondary-500 bg-white px-2 py-1 rounded border border-secondary-200">
                                                {qual.year}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <Briefcase className="text-primary-500" />
                                    Experience
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <p className="text-blue-600 text-sm font-medium mb-1">Teaching</p>
                                        <p className="text-2xl font-bold text-blue-900">{member.experience.teaching} Years</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                        <p className="text-green-600 text-sm font-medium mb-1">Industry</p>
                                        <p className="text-2xl font-bold text-green-900">{member.experience.industry} Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'academic' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                            <h3 className="text-lg font-bold text-secondary-900 mb-4">Weekly Schedule</h3>
                            <div className="space-y-4">
                                {member.schedule.map((slot, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 border border-secondary-100 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-24 flex-shrink-0">
                                            <p className="font-bold text-secondary-900">{slot.day}</p>
                                            <p className="text-xs text-secondary-500">{slot.type}</p>
                                        </div>
                                        <div className="flex-1 border-l-2 border-primary-500 pl-4">
                                            <p className="font-semibold text-secondary-900">{slot.subject}</p>
                                            <p className="text-sm text-secondary-600">{slot.time} • {slot.room}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'research' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-secondary-900 mb-4">Publications</h3>
                                {member.publications.length > 0 ? (
                                    <div className="space-y-3">
                                        {member.publications.map((pub, idx) => (
                                            <div key={idx} className="p-4 bg-secondary-50 rounded-lg border border-secondary-100">
                                                <p className="font-semibold text-secondary-900">{pub.title}</p>
                                                <p className="text-sm text-secondary-600">{pub.journal}, {pub.year}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-secondary-500 italic">No publications listed.</p>
                                )}
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-secondary-900 mb-4">Certifications & Memberships</h3>
                                <div className="flex flex-wrap gap-2">
                                    {member.certifications.map((cert, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
                                            {cert}
                                        </span>
                                    ))}
                                    {member.memberships.map((mem, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100">
                                            {mem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'admin' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                            <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                <DollarSign className="text-green-600" />
                                Salary Structure
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-secondary-600">
                                        <span>Basic Pay</span>
                                        <span className="font-medium text-secondary-900">₹{member.salary.basic.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-secondary-600">
                                        <span>Allowances</span>
                                        <span className="font-medium text-secondary-900">₹{member.salary.allowances.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-red-500">
                                        <span>Deductions</span>
                                        <span className="font-medium">-₹{member.salary.deductions.toLocaleString()}</span>
                                    </div>
                                    <div className="pt-3 border-t border-secondary-200 flex justify-between text-lg font-bold text-secondary-900">
                                        <span>Net Salary</span>
                                        <span>₹{member.salary.net.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="bg-secondary-50 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                                    <p className="text-secondary-500 mb-2">Next Pay Date</p>
                                    <p className="text-2xl font-bold text-secondary-900">Oct 31, 2024</p>
                                    <button className="mt-4 text-primary-600 text-sm font-medium hover:underline">Download Slip</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FacultyProfile;
