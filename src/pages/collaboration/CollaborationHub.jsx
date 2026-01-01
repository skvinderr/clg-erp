import React, { useState } from 'react';
import { MessageCircle, Users, FileText, Share2, Folder, Plus } from 'lucide-react';

const CollaborationHub = () => {
    const [activeTab, setActiveTab] = useState('forums');

    const forums = [
        { id: 1, title: 'CS101: Introduction to Programming', topics: 12, posts: 45, lastActive: '2 mins ago' },
        { id: 2, title: 'Project Management Group A', topics: 5, posts: 23, lastActive: '1 hour ago' },
        { id: 3, title: 'Campus Events & News', topics: 8, posts: 112, lastActive: 'Yesterday' },
    ];

    const files = [
        { id: 1, name: 'Project_Proposal_v2.pdf', size: '2.4 MB', owner: 'Alice Smith', date: 'Oct 24, 2024' },
        { id: 2, name: 'Research_Data.xlsx', size: '1.1 MB', owner: 'John Doe', date: 'Oct 22, 2024' },
        { id: 3, name: 'Design_Assets.zip', size: '15 MB', owner: 'Design Team', date: 'Oct 20, 2024' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Collaboration Hub</h1>
                <p className="text-secondary-500 dark:text-secondary-400">Connect, share, and work together</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-secondary-200 dark:border-secondary-800">
                <button
                    onClick={() => setActiveTab('forums')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'forums'
                            ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                            : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                        }`}
                >
                    <MessageCircle size={18} />
                    Discussion Forums
                </button>
                <button
                    onClick={() => setActiveTab('files')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'files'
                            ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                            : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                        }`}
                >
                    <Folder size={18} />
                    Shared Workspace
                </button>
                <button
                    onClick={() => setActiveTab('alumni')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'alumni'
                            ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                            : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                        }`}
                >
                    <Users size={18} />
                    Alumni Network
                </button>
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                {activeTab === 'forums' && (
                    <div className="space-y-4">
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                                <Plus size={18} />
                                New Topic
                            </button>
                        </div>
                        {forums.map((forum) => (
                            <div key={forum.id} className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 group-hover:text-primary-600 dark:group-hover:text-primary-400">{forum.title}</h3>
                                        <div className="flex gap-4 mt-2 text-sm text-secondary-500 dark:text-secondary-400">
                                            <span>{forum.topics} Topics</span>
                                            <span>{forum.posts} Posts</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-secondary-400 bg-secondary-100 dark:bg-secondary-800 px-2 py-1 rounded-full">
                                        Active {forum.lastActive}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'files' && (
                    <div className="space-y-4">
                        <div className="flex justify-end gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 border border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors">
                                <Share2 size={18} />
                                Share Folder
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                                <Plus size={18} />
                                Upload File
                            </button>
                        </div>
                        <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                                    <tr>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Name</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Size</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Owner</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Date Modified</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                                    {files.map((file) => (
                                        <tr key={file.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                            <td className="p-4 font-medium text-secondary-900 dark:text-secondary-100 flex items-center gap-3">
                                                <FileText className="text-blue-500" size={20} />
                                                {file.name}
                                            </td>
                                            <td className="p-4 text-secondary-500 dark:text-secondary-400 text-sm">{file.size}</td>
                                            <td className="p-4 text-secondary-500 dark:text-secondary-400 text-sm">{file.owner}</td>
                                            <td className="p-4 text-secondary-500 dark:text-secondary-400 text-sm">{file.date}</td>
                                            <td className="p-4 text-right">
                                                <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline text-sm">Download</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'alumni' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-secondary-200 dark:bg-secondary-700 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-secondary-500 dark:text-secondary-400">
                                    {String.fromCharCode(64 + i)}
                                </div>
                                <h3 className="font-bold text-lg text-secondary-900 dark:text-secondary-100">Alumni Name {i}</h3>
                                <p className="text-secondary-500 dark:text-secondary-400 text-sm mb-2">Software Engineer at Google</p>
                                <p className="text-xs text-secondary-400 mb-4">Class of 2022 • Computer Science</p>
                                <button className="w-full py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium">
                                    Connect
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollaborationHub;
