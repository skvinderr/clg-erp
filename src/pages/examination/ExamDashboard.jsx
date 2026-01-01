import React from 'react';
import { useNavigate } from 'react-router-dom';
import { exams } from '../../data/mockData';
import {
    Calendar, FileText, Award, Clock, AlertCircle,
    CheckCircle, ArrowRight, BookOpen
} from 'lucide-react';

const ExamDashboard = () => {
    const navigate = useNavigate();
    const upcomingExam = exams.find(e => e.status === 'Upcoming');

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Examination & Grading</h1>
                    <p className="text-secondary-500">Manage exams, grades, and results</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/examinations/results')}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Award size={18} />
                        <span>Results</span>
                    </button>
                    <button
                        onClick={() => navigate('/examinations/schedule')}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Calendar size={18} />
                        <span>Exam Schedule</span>
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-md text-white">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <Calendar size={24} />
                        </div>
                        <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Next Exam</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{upcomingExam?.title}</h3>
                    <p className="text-blue-100 text-sm mb-4">Starts: {new Date(upcomingExam?.startDate).toLocaleDateString()}</p>
                    <button
                        onClick={() => navigate('/examinations/schedule')}
                        className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        View Timetable <ArrowRight size={16} />
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                            <FileText size={24} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-1">Pending Grades</h3>
                    <p className="text-secondary-500 text-sm mb-4">3 Subjects need grade entry</p>
                    <button
                        onClick={() => navigate('/examinations/grades')}
                        className="w-full py-2 border border-secondary-200 hover:bg-secondary-50 rounded-lg text-sm font-medium text-secondary-700 transition-colors"
                    >
                        Enter Grades
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <Award size={24} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-1">Result Status</h3>
                    <p className="text-secondary-500 text-sm mb-4">Last Semester: 98% Pass Rate</p>
                    <button
                        onClick={() => navigate('/examinations/results')}
                        className="w-full py-2 border border-secondary-200 hover:bg-secondary-50 rounded-lg text-sm font-medium text-secondary-700 transition-colors"
                    >
                        View Analysis
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Papers */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h2 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <Clock className="text-orange-500" />
                        Upcoming Papers
                    </h2>
                    <div className="space-y-4">
                        {upcomingExam?.timetable.slice(0, 3).map((paper, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 bg-secondary-50 rounded-lg border border-secondary-100">
                                <div className="flex flex-col items-center min-w-[60px] bg-white p-2 rounded border border-secondary-200">
                                    <span className="text-xs text-secondary-500 font-bold">{new Date(paper.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                                    <span className="text-xl font-bold text-secondary-900">{new Date(paper.date).getDate()}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-secondary-900">{paper.subject}</h3>
                                    <p className="text-sm text-secondary-600">{paper.time} • {paper.room}</p>
                                </div>
                                <div className="text-sm font-medium text-secondary-500 bg-white px-2 py-1 rounded border border-secondary-200">
                                    {paper.code}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h2 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="text-green-500" />
                        Recent Activities
                    </h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Grade Entry Completed', desc: 'Web Technologies - CS-A', time: '2 hours ago', icon: FileText, color: 'text-blue-500 bg-blue-50' },
                            { title: 'Hall Tickets Generated', desc: 'End Semester Exam 2024', time: 'Yesterday', icon: BookOpen, color: 'text-purple-500 bg-purple-50' },
                            { title: 'Result Published', desc: 'Mid Semester Exam 2024', time: '3 days ago', icon: Award, color: 'text-green-500 bg-green-50' },
                        ].map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className={`p-2 rounded-full ${activity.color} mt-1`}>
                                    <activity.icon size={16} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-secondary-900">{activity.title}</h3>
                                    <p className="text-sm text-secondary-600">{activity.desc}</p>
                                    <p className="text-xs text-secondary-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamDashboard;
