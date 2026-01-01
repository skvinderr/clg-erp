import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { studentFees, feeStructures, feePayments } from '../../data/mockData';
import {
    CreditCard, DollarSign, Clock, AlertCircle,
    FileText, TrendingUp, Download
} from 'lucide-react';

const FeeDashboard = () => {
    const { user, hasRole } = useAuth();
    const navigate = useNavigate();

    // Admin View Logic
    if (hasRole(['Admin'])) {
        const totalCollection = feePayments.reduce((acc, curr) => acc + curr.amount, 0);
        const totalDue = studentFees.reduce((acc, curr) => acc + curr.dueAmount, 0);
        const paidStudents = studentFees.filter(s => s.status === 'Paid').length;
        const partialStudents = studentFees.filter(s => s.status === 'Partial').length;
        const unpaidStudents = studentFees.filter(s => s.status === 'Unpaid').length;

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Fee Management</h1>
                        <p className="text-secondary-500 dark:text-secondary-400">Overview of collections and dues</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/fees/reports')}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <FileText size={18} />
                            <span>Reports</span>
                        </button>
                        <button
                            onClick={() => navigate('/fees/structure')}
                            className="btn-primary flex items-center gap-2"
                        >
                            <DollarSign size={18} />
                            <span>Fee Structures</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                                <TrendingUp size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">₹{totalCollection.toLocaleString()}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Total Collection</p>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                                <AlertCircle size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">₹{totalDue.toLocaleString()}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Pending Dues</p>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                <CreditCard size={24} />
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <div>
                                <span className="block font-bold text-secondary-900 dark:text-secondary-100">{paidStudents}</span>
                                <span className="text-secondary-500 dark:text-secondary-400">Paid</span>
                            </div>
                            <div>
                                <span className="block font-bold text-secondary-900 dark:text-secondary-100">{partialStudents}</span>
                                <span className="text-secondary-500 dark:text-secondary-400">Partial</span>
                            </div>
                            <div>
                                <span className="block font-bold text-secondary-900 dark:text-secondary-100">{unpaidStudents}</span>
                                <span className="text-secondary-500 dark:text-secondary-400">Unpaid</span>
                            </div>
                        </div>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm mt-2">Payment Status</p>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-800/50">
                        <h3 className="font-bold text-secondary-900 dark:text-secondary-100">Recent Transactions</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-secondary-200 dark:border-secondary-800">
                                    <th className="p-4 font-semibold text-secondary-700 dark:text-secondary-300">Transaction ID</th>
                                    <th className="p-4 font-semibold text-secondary-700 dark:text-secondary-300">Student ID</th>
                                    <th className="p-4 font-semibold text-secondary-700 dark:text-secondary-300">Date</th>
                                    <th className="p-4 font-semibold text-secondary-700 dark:text-secondary-300">Amount</th>
                                    <th className="p-4 font-semibold text-secondary-700 dark:text-secondary-300">Mode</th>
                                    <th className="p-4 font-semibold text-secondary-700 dark:text-secondary-300">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feePayments.slice(0, 5).map((txn) => (
                                    <tr key={txn.id} className="border-b border-secondary-100 dark:border-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-800/50">
                                        <td className="p-4 font-mono text-secondary-600 dark:text-secondary-400">{txn.id}</td>
                                        <td className="p-4 text-secondary-900 dark:text-secondary-100">{txn.studentId}</td>
                                        <td className="p-4 text-secondary-600 dark:text-secondary-400">{txn.date}</td>
                                        <td className="p-4 font-medium text-secondary-900 dark:text-secondary-100">₹{txn.amount.toLocaleString()}</td>
                                        <td className="p-4 text-secondary-600 dark:text-secondary-400">{txn.mode}</td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">
                                                {txn.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    // Student View Logic
    // Mock student ID for now (assuming logged in user is linked to STU001 for demo)
    const studentId = 'STU001';
    const myFee = studentFees.find(f => f.studentId === studentId);
    const structure = feeStructures.find(s => s.id === myFee?.feeStructureId);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">My Fees</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Manage your fee payments and receipts</p>
                </div>
                <button
                    onClick={() => navigate('/fees/history')}
                    className="btn-secondary flex items-center gap-2"
                >
                    <Clock size={18} />
                    <span>Payment History</span>
                </button>
            </div>

            {myFee && structure ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Due Amount Card */}
                    <div className="lg:col-span-2 bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">Current Dues</h2>
                                <p className="text-secondary-500 dark:text-secondary-400">{structure.semester}th Semester - {structure.academicYear}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${myFee.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                myFee.status === 'Partial' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-red-100 text-red-700'
                                }`}>
                                {myFee.status}
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            <div>
                                <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-1">Total Amount</p>
                                <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">₹{myFee.totalAmount.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-1">Paid Amount</p>
                                <p className="text-2xl font-bold text-green-600 dark:text-green-400">₹{myFee.paidAmount.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-1">Due Amount</p>
                                <p className="text-2xl font-bold text-red-600 dark:text-red-400">₹{myFee.dueAmount.toLocaleString()}</p>
                            </div>
                        </div>

                        {myFee.dueAmount > 0 && (
                            <button
                                onClick={() => navigate('/fees/payment')}
                                className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                            >
                                <CreditCard size={20} />
                                <span>Pay Now</span>
                            </button>
                        )}
                    </div>

                    {/* Fee Breakdown */}
                    <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl border border-secondary-200 dark:border-secondary-800">
                        <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-4">Fee Breakdown</h3>
                        <div className="space-y-3">
                            {structure.components.map((comp, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                    <span className="text-secondary-600 dark:text-secondary-400">{comp.name}</span>
                                    <span className="font-medium text-secondary-900 dark:text-secondary-100">₹{comp.amount.toLocaleString()}</span>
                                </div>
                            ))}
                            <div className="border-t border-secondary-200 dark:border-secondary-700 pt-3 flex justify-between font-bold text-secondary-900 dark:text-secondary-100">
                                <span>Total</span>
                                <span>₹{structure.totalAmount.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12 text-secondary-500">
                    <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No fee details found.</p>
                </div>
            )}
        </div>
    );
};

export default FeeDashboard;
