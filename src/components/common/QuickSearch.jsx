import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';

const QuickSearch = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Mock search results
    const allItems = [
        { type: 'Page', label: 'Dashboard', path: '/dashboard' },
        { type: 'Page', label: 'Students', path: '/students' },
        { type: 'Page', label: 'Faculty', path: '/faculty' },
        { type: 'Page', label: 'Fees', path: '/fees' },
        { type: 'Page', label: 'Library', path: '/library' },
        { type: 'Action', label: 'Add Student', path: '/students/add' },
        { type: 'Action', label: 'Pay Fees', path: '/fees/payment' },
        { type: 'Action', label: 'Issue Book', path: '/library/issue' },
    ];

    const results = query
        ? allItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
        : [];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm transition-opacity">
            <div className="w-full max-w-xl bg-white dark:bg-secondary-900 rounded-xl shadow-2xl border border-secondary-200 dark:border-secondary-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center p-4 border-b border-secondary-100 dark:border-secondary-800">
                    <Search className="text-secondary-400 w-5 h-5 mr-3" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search pages, actions, or data..."
                        className="flex-1 bg-transparent border-none outline-none text-lg text-secondary-900 dark:text-secondary-100 placeholder-secondary-400"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="p-1 rounded hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-500">
                        <X size={20} />
                    </button>
                </div>

                <div className="max-h-96 overflow-y-auto p-2">
                    {results.length > 0 ? (
                        <div className="space-y-1">
                            {results.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        navigate(item.path);
                                        onClose();
                                    }}
                                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 group transition-colors text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${item.type === 'Page' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                            }`}>
                                            {item.type}
                                        </span>
                                        <span className="text-secondary-900 dark:text-secondary-100 font-medium">{item.label}</span>
                                    </div>
                                    <ArrowRight size={16} className="text-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-secondary-500 dark:text-secondary-400">
                            {query ? 'No results found.' : 'Type to search...'}
                        </div>
                    )}
                </div>

                <div className="p-3 bg-secondary-50 dark:bg-secondary-800/50 border-t border-secondary-100 dark:border-secondary-800 text-xs text-secondary-500 flex justify-between">
                    <span>Press <strong>ESC</strong> to close</span>
                    <span><strong>↑↓</strong> to navigate</span>
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
