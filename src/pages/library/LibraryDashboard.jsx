import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { libraryBooks, issuedBooks } from '../../data/mockData';
import {
    Book, BookOpen, Clock, AlertTriangle, Search,
    ArrowRight, RotateCcw, Monitor
} from 'lucide-react';

const LibraryDashboard = () => {
    const { user, hasRole } = useAuth();
    const navigate = useNavigate();

    // Admin View
    if (hasRole(['Admin'])) {
        const totalBooks = libraryBooks.reduce((acc, curr) => acc + curr.copies, 0);
        const booksIssued = issuedBooks.filter(b => b.status === 'Issued' || b.status === 'Overdue').length;
        const overdueBooks = issuedBooks.filter(b => b.status === 'Overdue').length;

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900">Library Management</h1>
                        <p className="text-secondary-500">Overview of library operations</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/library/issue-return')}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <RotateCcw size={18} />
                            <span>Issue / Return</span>
                        </button>
                        <button
                            onClick={() => navigate('/library/catalog')}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Search size={18} />
                            <span>Book Catalog</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Book size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{totalBooks}</h3>
                        <p className="text-secondary-500 text-sm">Total Books</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <BookOpen size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{booksIssued}</h3>
                        <p className="text-secondary-500 text-sm">Currently Issued</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                <AlertTriangle size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{overdueBooks}</h3>
                        <p className="text-secondary-500 text-sm">Overdue Returns</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 bg-secondary-50">
                        <h3 className="font-bold text-secondary-900">Recent Circulation Activity</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-secondary-200">
                                    <th className="p-4 font-semibold text-secondary-700">Book Title</th>
                                    <th className="p-4 font-semibold text-secondary-700">Student ID</th>
                                    <th className="p-4 font-semibold text-secondary-700">Issue Date</th>
                                    <th className="p-4 font-semibold text-secondary-700">Due Date</th>
                                    <th className="p-4 font-semibold text-secondary-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {issuedBooks.slice(0, 5).map((issue) => {
                                    const book = libraryBooks.find(b => b.id === issue.bookId);
                                    return (
                                        <tr key={issue.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                                            <td className="p-4 font-medium text-secondary-900">{book?.title || 'Unknown Book'}</td>
                                            <td className="p-4 text-secondary-600">{issue.studentId}</td>
                                            <td className="p-4 text-secondary-600">{issue.issueDate}</td>
                                            <td className="p-4 text-secondary-600">{issue.dueDate}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${issue.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                                                        issue.status === 'Returned' ? 'bg-green-100 text-green-700' :
                                                            'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {issue.status}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    // Student View
    const studentId = 'STU001'; // Mock ID
    const myIssuedBooks = issuedBooks.filter(b => b.studentId === studentId && b.status !== 'Returned');

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">My Library</h1>
                    <p className="text-secondary-500">Manage your books and resources</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/library/digital')}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Monitor size={18} />
                        <span>Digital Library</span>
                    </button>
                    <button
                        onClick={() => navigate('/library/catalog')}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Search size={18} />
                        <span>Search Books</span>
                    </button>
                </div>
            </div>

            {/* My Issued Books */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <BookOpen className="text-primary-500" />
                        Currently Issued
                    </h3>
                    {myIssuedBooks.length > 0 ? (
                        <div className="space-y-4">
                            {myIssuedBooks.map((issue) => {
                                const book = libraryBooks.find(b => b.id === issue.bookId);
                                return (
                                    <div key={issue.id} className="flex gap-4 p-3 border border-secondary-100 rounded-lg hover:border-primary-200 transition-colors">
                                        <img src={book?.cover} alt={book?.title} className="w-16 h-24 object-cover rounded shadow-sm" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-secondary-900 line-clamp-1">{book?.title}</h4>
                                            <p className="text-xs text-secondary-500 mb-2">{book?.author}</p>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-xs text-secondary-500">Due Date</p>
                                                    <p className={`text-sm font-medium ${issue.status === 'Overdue' ? 'text-red-600' : 'text-secondary-900'}`}>
                                                        {issue.dueDate}
                                                    </p>
                                                </div>
                                                {issue.status === 'Overdue' && (
                                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                                                        Fine: ₹{issue.fine}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-secondary-500">
                            <p>No books currently issued.</p>
                        </div>
                    )}
                </div>

                {/* Recommended / New Arrivals */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <Clock className="text-purple-500" />
                        New Arrivals
                    </h3>
                    <div className="space-y-4">
                        {libraryBooks.slice(0, 3).map((book) => (
                            <div key={book.id} className="flex items-center gap-4 p-2 hover:bg-secondary-50 rounded-lg transition-colors cursor-pointer">
                                <div className="w-12 h-16 bg-secondary-200 rounded overflow-hidden flex-shrink-0">
                                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-secondary-900 truncate">{book.title}</h4>
                                    <p className="text-xs text-secondary-500 truncate">{book.author}</p>
                                </div>
                                <ArrowRight size={16} className="text-secondary-400" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryDashboard;
