import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentSkills } from '../../data/mockData';
import {
    ArrowLeft, User, Award, FileText, Plus, X, Upload
} from 'lucide-react';

const StudentProfile = () => {
    const navigate = useNavigate();
    const studentId = 'STU001'; // Mock ID
    const [profile, setProfile] = useState(studentSkills.find(s => s.studentId === studentId) || { skills: [], certifications: [] });
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        if (newSkill && !profile.skills.includes(newSkill)) {
            setProfile({ ...profile, skills: [...profile.skills, newSkill] });
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skill) => {
        setProfile({ ...profile, skills: profile.skills.filter(s => s !== skill) });
    };

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
                    <h1 className="text-2xl font-bold text-secondary-900">Placement Profile</h1>
                    <p className="text-secondary-500">Manage your resume and skills</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Resume Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <FileText className="text-primary-600" />
                            Resume Builder
                        </h2>

                        <div className="space-y-6">
                            <div className="p-4 border-2 border-dashed border-secondary-300 rounded-xl flex flex-col items-center justify-center text-secondary-500 hover:bg-secondary-50 transition-colors cursor-pointer">
                                <Upload size={32} className="mb-2" />
                                <p className="font-medium">Upload Existing Resume</p>
                                <p className="text-xs">PDF, DOCX up to 5MB</p>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-secondary-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-secondary-500">Or build one</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 border border-secondary-200 rounded-lg hover:border-primary-500 cursor-pointer transition-all">
                                    <div className="h-32 bg-secondary-100 mb-2 rounded"></div>
                                    <p className="font-bold text-center text-secondary-700">Modern Template</p>
                                </div>
                                <div className="p-4 border border-secondary-200 rounded-lg hover:border-primary-500 cursor-pointer transition-all">
                                    <div className="h-32 bg-secondary-100 mb-2 rounded"></div>
                                    <p className="font-bold text-center text-secondary-700">Classic Template</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Award className="text-purple-600" />
                            Certifications & Projects
                        </h2>
                        <div className="space-y-4">
                            {profile.certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                                    <span className="font-medium text-secondary-800">{cert}</span>
                                    <button className="text-red-500 hover:text-red-700">
                                        <X size={18} />
                                    </button>
                                </div>
                            ))}
                            <button className="w-full py-2 border-2 border-dashed border-secondary-300 rounded-lg text-secondary-500 font-medium hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center gap-2">
                                <Plus size={18} />
                                Add Certification
                            </button>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <User className="text-blue-600" />
                            Technical Skills
                        </h2>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {profile.skills.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                                    {skill}
                                    <button onClick={() => handleRemoveSkill(skill)} className="hover:text-blue-900">
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add skill (e.g. Node.js)"
                                className="flex-1 px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                            />
                            <button
                                onClick={handleAddSkill}
                                className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-xl shadow-md text-white">
                        <h3 className="font-bold text-lg mb-2">Profile Strength</h3>
                        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <p className="text-sm text-purple-100 mb-4">70% Complete</p>
                        <p className="text-xs text-purple-100">Add a project portfolio to increase your chances of being shortlisted.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
