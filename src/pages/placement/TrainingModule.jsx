import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, BookOpen, Video, Users, Calendar, PlayCircle, Award
} from 'lucide-react';

const TrainingModule = () => {
    const navigate = useNavigate();

    const workshops = [
        { id: 1, title: 'Resume Building Workshop', date: '2024-02-10', time: '10:00 AM', instructor: 'Mr. John Doe', type: 'Offline' },
        { id: 2, title: 'Aptitude Mastery', date: '2024-02-12', time: '02:00 PM', instructor: 'Ms. Jane Smith', type: 'Online' },
        { id: 3, title: 'Mock Interview Session', date: '2024-02-15', time: '11:00 AM', instructor: 'Industry Experts', type: 'Offline' }
    ];

    const resources = [
        { id: 1, title: 'Data Structures & Algorithms', type: 'Video Course', progress: 45 },
        { id: 2, title: 'System Design Basics', type: 'PDF Guide', progress: 100 },
        { id: 3, title: 'Behavioral Interview Questions', type: 'Article', progress: 0 }
    ];

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
                    <h1 className="text-2xl font-bold text-secondary-900">Training & Development</h1>
                    <p className="text-secondary-500">Sharpen your skills for the big day</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Workshops */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Calendar className="text-primary-600" />
                            Upcoming Workshops
                        </h2>
                        <div className="space-y-4">
                            {workshops.map((workshop) => (
                                <div key={workshop.id} className="flex items-center justify-between p-4 border border-secondary-200 rounded-xl hover:border-primary-300 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex flex-col items-center justify-center font-bold">
                                            <span className="text-xs uppercase">{new Date(workshop.date).toLocaleString('default', { month: 'short' })}</span>
                                            <span className="text-lg">{new Date(workshop.date).getDate()}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-secondary-900">{workshop.title}</h3>
                                            <p className="text-sm text-secondary-500">{workshop.time} • {workshop.instructor}</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-secondary-900 text-white text-sm font-medium rounded-lg hover:bg-secondary-800">
                                        Register
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Video className="text-red-600" />
                            Mock Interviews
                        </h2>
                        <div className="bg-secondary-50 p-6 rounded-xl text-center">
                            <Users size={48} className="mx-auto text-secondary-400 mb-4" />
                            <h3 className="font-bold text-lg text-secondary-900 mb-2">Practice with Peers or Experts</h3>
                            <p className="text-secondary-500 mb-6 max-w-md mx-auto">Schedule a mock interview to get real-time feedback on your communication and technical skills.</p>
                            <div className="flex justify-center gap-4">
                                <button className="btn-secondary">Find a Peer</button>
                                <button className="btn-primary">Book Expert Session</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <BookOpen className="text-blue-600" />
                            Learning Resources
                        </h2>
                        <div className="space-y-4">
                            {resources.map((resource) => (
                                <div key={resource.id} className="p-3 border border-secondary-100 rounded-lg">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            {resource.type === 'Video Course' ? <PlayCircle size={16} className="text-red-500" /> : <FileText size={16} className="text-blue-500" />}
                                            <span className="font-medium text-secondary-900 text-sm">{resource.title}</span>
                                        </div>
                                        {resource.progress === 100 && <CheckCircle size={16} className="text-green-500" />}
                                    </div>
                                    <div className="w-full bg-secondary-100 rounded-full h-1.5">
                                        <div
                                            className={`h-1.5 rounded-full ${resource.progress === 100 ? 'bg-green-500' : 'bg-primary-500'}`}
                                            style={{ width: `${resource.progress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-secondary-400 mt-1 text-right">{resource.progress}% Complete</p>
                                </div>
                            ))}
                            <button className="w-full py-2 text-primary-600 text-sm font-medium hover:underline">
                                View All Resources
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-xl shadow-md text-white">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <Award size={20} />
                            Skill Assessment
                        </h3>
                        <p className="text-green-100 text-sm mb-4">Take a skill test to earn a badge and showcase it on your profile.</p>
                        <button className="w-full py-2 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors">
                            Take Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingModule;
