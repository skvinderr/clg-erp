import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, FileText, Video, Download, ExternalLink, Search
} from 'lucide-react';

const DigitalLibrary = () => {
    const navigate = useNavigate();

    const resources = [
        { id: 1, title: 'Data Structures Notes', type: 'PDF', size: '2.5 MB', date: '2023-11-15' },
        { id: 2, title: 'DBMS Lecture Series', type: 'Video', size: 'Link', date: '2023-10-20' },
        { id: 3, title: 'Previous Year Papers (2022)', type: 'PDF', size: '15 MB', date: '2023-08-05' },
        { id: 4, title: 'IEEE Journal Access', type: 'Link', size: 'External', date: '2024-01-01' },
        { id: 5, title: 'Algorithm Visualizer', type: 'Tool', size: 'Web', date: '2023-09-10' },
    ];

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
                    <h1 className="text-2xl font-bold text-secondary-900">Digital Library</h1>
                    <p className="text-secondary-500">E-books, journals, and study materials</p>
                </div>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['E-Books', 'Journals', 'Question Papers', 'Video Lectures'].map((cat) => (
                    <div key={cat} className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 hover:border-primary-300 cursor-pointer transition-colors text-center">
                        <h3 className="font-medium text-secondary-900">{cat}</h3>
                    </div>
                ))}
            </div>

            {/* Resource List */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="p-4 border-b border-secondary-200 bg-secondary-50">
                    <h3 className="font-bold text-secondary-900">Recent Uploads</h3>
                </div>
                <div className="divide-y divide-secondary-100">
                    {resources.map((res) => (
                        <div key={res.id} className="p-4 flex items-center justify-between hover:bg-secondary-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${res.type === 'PDF' ? 'bg-red-50 text-red-600' :
                                        res.type === 'Video' ? 'bg-blue-50 text-blue-600' :
                                            'bg-purple-50 text-purple-600'
                                    }`}>
                                    {res.type === 'PDF' ? <FileText size={20} /> :
                                        res.type === 'Video' ? <Video size={20} /> :
                                            <ExternalLink size={20} />}
                                </div>
                                <div>
                                    <h4 className="font-medium text-secondary-900">{res.title}</h4>
                                    <p className="text-xs text-secondary-500">{res.type} • {res.size} • {res.date}</p>
                                </div>
                            </div>
                            <button className="p-2 text-secondary-400 hover:text-primary-600 transition-colors">
                                <Download size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalLibrary;
