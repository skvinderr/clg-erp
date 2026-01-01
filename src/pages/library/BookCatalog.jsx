import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { libraryBooks } from '../../data/mockData';
import {
    ArrowLeft, Search, Filter, BookOpen, CheckCircle, XCircle
} from 'lucide-react';

const BookCatalog = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(libraryBooks.map(b => b.category))];

    const filteredBooks = libraryBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.isbn.includes(searchTerm);
        const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
                    <h1 className="text-2xl font-bold text-secondary-900">Book Catalog</h1>
                    <p className="text-secondary-500">Search and reserve books</p>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Title, Author, or ISBN..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden flex flex-col h-full group hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden relative bg-secondary-100">
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2">
                                <span className={`px-2 py-1 rounded text-xs font-bold shadow-sm ${book.available > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {book.available > 0 ? 'Available' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 flex-1 flex flex-col">
                            <div className="flex-1">
                                <h3 className="font-bold text-secondary-900 line-clamp-2 mb-1" title={book.title}>{book.title}</h3>
                                <p className="text-sm text-secondary-500 mb-2">{book.author}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="text-xs bg-secondary-100 text-secondary-600 px-2 py-1 rounded">{book.category}</span>
                                    <span className="text-xs bg-secondary-100 text-secondary-600 px-2 py-1 rounded">{book.edition} Ed.</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-secondary-100 flex justify-between items-center">
                                <div className="text-xs text-secondary-500">
                                    <p>Location: <span className="font-medium text-secondary-700">{book.location}</span></p>
                                    <p>{book.available} / {book.copies} copies</p>
                                </div>
                                <button
                                    disabled={book.available === 0}
                                    className={`p-2 rounded-lg transition-colors ${book.available > 0
                                            ? 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                                            : 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
                                        }`}
                                    title={book.available > 0 ? "Reserve Book" : "Not Available"}
                                >
                                    <BookOpen size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredBooks.length === 0 && (
                <div className="text-center py-12 text-secondary-500">
                    <Search size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No books found matching your search.</p>
                </div>
            )}
        </div>
    );
};

export default BookCatalog;
