import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { libraryBooks, issuedBooks } from '../../data/mockData';
import {
    ArrowLeft, User, Book, Calendar, Plus, Search
} from 'lucide-react';

const IssueReturn = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('issue'); // issue, return
    const [studentId, setStudentId] = useState('');
    const [bookIsbn, setBookIsbn] = useState('');

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/library')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Circulation Desk</h1>
                    <p className="text-secondary-500">Issue and return books</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-secondary-200">
                <button
                    onClick={() => setActiveTab('issue')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'issue'
                            ? 'border-primary-600 text-primary-600'
                            : 'border-transparent text-secondary-500 hover:text-secondary-700'
                        }`}
                >
                    Issue Book
                </button>
                <button
                    onClick={() => setActiveTab('return')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'return'
                            ? 'border-primary-600 text-primary-600'
                            : 'border-transparent text-secondary-500 hover:text-secondary-700'
                        }`}
                >
                    Return Book
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h2 className="text-lg font-bold text-secondary-900 mb-6">
                        {activeTab === 'issue' ? 'Issue New Book' : 'Process Return'}
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Student ID / Library Card</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                                <input
                                    type="text"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    placeholder="Scan or enter Student ID"
                                    className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Book ISBN / Barcode</label>
                            <div className="relative">
                                <Book className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                                <input
                                    type="text"
                                    value={bookIsbn}
                                    onChange={(e) => setBookIsbn(e.target.value)}
                                    placeholder="Scan or enter ISBN"
                                    className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                        </div>

                        {activeTab === 'issue' && (
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Due Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                                    <input
                                        type="date"
                                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="pt-4">
                            <button className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-colors ${activeTab === 'issue' ? 'bg-primary-600 hover:bg-primary-700' : 'bg-green-600 hover:bg-green-700'
                                }`}>
                                {activeTab === 'issue' ? 'Confirm Issue' : 'Confirm Return'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info / Preview Section */}
                <div className="space-y-6">
                    {/* Student Info Preview */}
                    <div className="bg-secondary-50 p-6 rounded-xl border border-secondary-200">
                        <h3 className="font-bold text-secondary-900 mb-4">Student Details</h3>
                        {studentId ? (
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center text-secondary-500">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="font-medium text-secondary-900">John Doe</p>
                                    <p className="text-sm text-secondary-500">Computer Science • Sem 6</p>
                                    <p className="text-xs text-red-500 mt-1">1 Book Overdue</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-secondary-500 italic">Enter Student ID to fetch details...</p>
                        )}
                    </div>

                    {/* Book Info Preview */}
                    <div className="bg-secondary-50 p-6 rounded-xl border border-secondary-200">
                        <h3 className="font-bold text-secondary-900 mb-4">Book Details</h3>
                        {bookIsbn ? (
                            <div className="flex gap-4">
                                <div className="w-16 h-24 bg-secondary-200 rounded shadow-sm flex-shrink-0"></div>
                                <div>
                                    <p className="font-medium text-secondary-900">Clean Code</p>
                                    <p className="text-sm text-secondary-500">Robert C. Martin</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Available: 12</span>
                                        <span className="text-xs bg-secondary-200 text-secondary-600 px-2 py-1 rounded">Rack B-05</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-secondary-500 italic">Enter ISBN to fetch details...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueReturn;
