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
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Communication Hub</h1>
                    <p className="text-secondary-500">Manage notices and feedback</p>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => setActiveTab('Notices')}
                    className={`flex-1 p-4 rounded-xl border transition-all flex items-center justify-center gap-2 font-bold ${activeTab === 'Notices'
                            ? 'bg-primary-50 border-primary-500 text-primary-700'
                            : 'bg-white border-secondary-200 text-secondary-600 hover:border-primary-300'
                        }`}
                >
                    <Bell size={20} />
                    Notice Board
                </button>
                <button
                    onClick={() => setActiveTab('Feedback')}
                    className={`flex-1 p-4 rounded-xl border transition-all flex items-center justify-center gap-2 font-bold ${activeTab === 'Feedback'
                            ? 'bg-primary-50 border-primary-500 text-primary-700'
                            : 'bg-white border-secondary-200 text-secondary-600 hover:border-primary-300'
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

                    <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                        <div className="divide-y divide-secondary-100">
                            {notices.map((notice) => (
                                <div key={notice.id} className="p-6 hover:bg-secondary-50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${notice.type === 'Exam' ? 'bg-red-100 text-red-700' :
                                                    notice.type === 'Event' ? 'bg-green-100 text-green-700' :
                                                        'bg-blue-100 text-blue-700'
                                                }`}>
                                                {notice.type}
                                            </span>
                                            <span className="text-sm text-secondary-500">{notice.date}</span>
                                        </div>
                                        <button className="text-secondary-400 hover:text-red-600 text-sm">Delete</button>
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary-900 mb-1">{notice.title}</h3>
                                    <p className="text-secondary-600">
                                        This is a sample notice content. In a real application, this would be the full body of the announcement sent to students and faculty.
                                    </p>
                                    <div className="mt-4 flex items-center gap-4 text-sm text-secondary-500">
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
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="divide-y divide-secondary-100">
                        {feedback.map((item) => (
                            <div key={item.id} className="p-6 hover:bg-secondary-50 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${item.type === 'Complaint' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            {item.type === 'Complaint' ? <MessageSquare size={20} /> : <MessageSquare size={20} />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-secondary-900">{item.subject}</h3>
                                            <p className="text-xs text-secondary-500">{item.date}</p>
                                        </div>
                                    </div>
                                    <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {item.status === 'Resolved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-secondary-700 mb-4 pl-12">{item.message}</p>
                                <div className="pl-12 flex gap-3">
                                    {item.status !== 'Resolved' && (
                                        <button className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
                                            Mark Resolved
                                        </button>
                                    )}
                                    <button className="px-3 py-1 border border-secondary-300 text-secondary-600 text-sm font-medium rounded hover:bg-white">
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
