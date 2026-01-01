import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notices, feedback } from '../../data/mockData';
import {
    ArrowLeft, Bell, MessageSquare, Send, Plus, CheckCircle, Clock
} from 'lucide-react';

const CommunicationHub = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Notices');

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
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Communication Hub</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Manage notices and feedback</p>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => setActiveTab('Notices')}
                    className={`flex-1 p-4 rounded-xl border transition-all flex items-center justify-center gap-2 font-bold ${activeTab === 'Notices'
                        ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500 text-primary-700 dark:text-primary-400'
                        : 'bg-white dark:bg-secondary-900 border-secondary-200 dark:border-secondary-800 text-secondary-600 dark:text-secondary-400 hover:border-primary-300 dark:hover:border-primary-700'
                        }`}
                >
                    <Bell size={20} />
                    Notice Board
                </button>
                <button
                    onClick={() => setActiveTab('Feedback')}
                    className={`flex-1 p-4 rounded-xl border transition-all flex items-center justify-center gap-2 font-bold ${activeTab === 'Feedback'
                        ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500 text-primary-700 dark:text-primary-400'
                        : 'bg-white dark:bg-secondary-900 border-secondary-200 dark:border-secondary-800 text-secondary-600 dark:text-secondary-400 hover:border-primary-300 dark:hover:border-primary-700'
                        }`}
                >
                    <MessageSquare size={20} />
                    Feedback & Suggestions
                </button>
            </div>

            {activeTab === 'Notices' && (
                <div className="space-y-6">
                    <div className="flex justify-end">
                        <button className="btn-primary flex items-center gap-2">
                            <Plus size={18} />
                            <span>Post New Notice</span>
                        </button>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                        <div className="divide-y divide-secondary-100 dark:divide-secondary-800">
                            {notices.map((notice) => (
                                <div key={notice.id} className="p-6 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${notice.type === 'Exam' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                notice.type === 'Event' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                }`}>
                                                {notice.type}
                                            </span>
                                            <span className="text-sm text-secondary-500 dark:text-secondary-400">{notice.date}</span>
                                        </div>
                                        <button className="text-secondary-400 hover:text-red-600 dark:hover:text-red-400 text-sm">Delete</button>
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-1">{notice.title}</h3>
                                    <p className="text-secondary-600 dark:text-secondary-400">
                                        This is a sample notice content. In a real application, this would be the full body of the announcement sent to students and faculty.
                                    </p>
                                    <div className="mt-4 flex items-center gap-4 text-sm text-secondary-500 dark:text-secondary-400">
                                        <span className="flex items-center gap-1">
                                            <Send size={14} />
                                            Sent via Email
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Bell size={14} />
                                            Push Notification
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Feedback' && (
                <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                    <div className="divide-y divide-secondary-100 dark:divide-secondary-800">
                        {feedback.map((item) => (
                            <div key={item.id} className="p-6 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${item.type === 'Complaint' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                            }`}>
                                            {item.type === 'Complaint' ? <MessageSquare size={20} /> : <MessageSquare size={20} />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-secondary-900 dark:text-secondary-100">{item.subject}</h3>
                                            <p className="text-xs text-secondary-500 dark:text-secondary-400">{item.date}</p>
                                        </div>
                                    </div>
                                    <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Resolved' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                        {item.status === 'Resolved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-secondary-700 dark:text-secondary-300 mb-4 pl-12">{item.message}</p>
                                <div className="pl-12 flex gap-3">
                                    {item.status !== 'Resolved' && (
                                        <button className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
                                            Mark Resolved
                                        </button>
                                    )}
                                    <button className="px-3 py-1 border border-secondary-300 dark:border-secondary-700 text-secondary-600 dark:text-secondary-400 text-sm font-medium rounded hover:bg-white dark:hover:bg-secondary-800">
                                        Reply
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommunicationHub;
