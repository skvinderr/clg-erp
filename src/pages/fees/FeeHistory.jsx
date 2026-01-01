import React from 'react';
import { useNavigate } from 'react-router-dom';
import { feePayments } from '../../data/mockData';
import {
    ArrowLeft, Download, Search, Filter, FileText
} from 'lucide-react';

const FeeHistory = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/fees')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Payment History</h1>
                    <p className="text-secondary-500">View and download past payment receipts</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Transaction ID..."
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button className="btn-secondary flex items-center gap-2 justify-center flex-1 md:flex-none">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                    <button className="btn-primary flex items-center gap-2 justify-center flex-1 md:flex-none">
                        <Download size={18} />
                        <span>Export CSV</span>
                    </button>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-secondary-50 border-b border-secondary-200">
                                <th className="p-4 font-semibold text-secondary-700">Date</th>
                                <th className="p-4 font-semibold text-secondary-700">Transaction ID</th>
                                <th className="p-4 font-semibold text-secondary-700">Amount</th>
                                <th className="p-4 font-semibold text-secondary-700">Payment Mode</th>
                                <th className="p-4 font-semibold text-secondary-700">Status</th>
                                <th className="p-4 font-semibold text-secondary-700 text-right">Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feePayments.map((txn) => (
                                <tr key={txn.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                                    <td className="p-4 text-secondary-900">{txn.date}</td>
                                    <td className="p-4 font-mono text-secondary-600">{txn.id}</td>
                                    <td className="p-4 font-medium text-secondary-900">₹{txn.amount.toLocaleString()}</td>
                                    <td className="p-4 text-secondary-600">{txn.mode}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 p-2 rounded-lg transition-colors">
                                            <FileText size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeeHistory;
