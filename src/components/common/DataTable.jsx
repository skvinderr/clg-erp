import React, { useState } from 'react';
import {
    ChevronDown, ChevronUp, Search, Download, ChevronLeft, ChevronRight
} from 'lucide-react';

const DataTable = ({ columns, data, title, actions }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter
    const filteredData = data.filter((item) =>
        Object.values(item).some(
            (value) =>
                value &&
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Pagination
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden transition-colors">
            <div className="p-4 border-b border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">{title}</h2>
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-secondary-200 dark:border-secondary-700 rounded-lg bg-secondary-50 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="p-2 border border-secondary-200 dark:border-secondary-700 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 text-secondary-600 dark:text-secondary-400">
                        <Download size={20} />
                    </button>
                    {actions}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-secondary-50 dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm cursor-pointer hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
                                    onClick={() => handleSort(col.key)}
                                >
                                    <div className="flex items-center gap-1">
                                        {col.label}
                                        {sortConfig.key === col.key && (
                                            sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, i) => (
                                <tr key={i} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                    {columns.map((col) => (
                                        <td key={col.key} className="p-4 text-secondary-900 dark:text-secondary-200 text-sm">
                                            {col.render ? col.render(row) : row[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="p-8 text-center text-secondary-500 dark:text-secondary-400">
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-secondary-200 dark:border-secondary-800 flex justify-between items-center">
                <span className="text-sm text-secondary-500 dark:text-secondary-400">
                    Showing {Math.min((currentPage - 1) * itemsPerPage + 1, sortedData.length)} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-secondary-200 dark:border-secondary-700 rounded-lg disabled:opacity-50 hover:bg-secondary-50 dark:hover:bg-secondary-800 text-secondary-600 dark:text-secondary-400"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-secondary-200 dark:border-secondary-700 rounded-lg disabled:opacity-50 hover:bg-secondary-50 dark:hover:bg-secondary-800 text-secondary-600 dark:text-secondary-400"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
