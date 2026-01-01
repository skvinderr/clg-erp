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
                        <h1 className="text-2xl font-bold text-secondary-900">Fee Management</h1>
                        <p className="text-secondary-500">Overview of collections and dues</p>
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
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <TrendingUp size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">₹{totalCollection.toLocaleString()}</h3>
                        <p className="text-secondary-500 text-sm">Total Collection</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                <AlertCircle size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">₹{totalDue.toLocaleString()}</h3>
                        <p className="text-secondary-500 text-sm">Pending Dues</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <CreditCard size={24} />
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <div>
                                <span className="block font-bold text-secondary-900">{paidStudents}</span>
                                <span className="text-secondary-500">Paid</span>
                            </div>
                            <div>
                                <span className="block font-bold text-secondary-900">{partialStudents}</span>
                                <span className="text-secondary-500">Partial</span>
                            </div>
                            <div>
                                <span className="block font-bold text-secondary-900">{unpaidStudents}</span>
                                <span className="text-secondary-500">Unpaid</span>
                            </div>
                        </div>
                        <p className="text-secondary-500 text-sm mt-2">Payment Status</p>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 bg-secondary-50">
                        <h3 className="font-bold text-secondary-900">Recent Transactions</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-secondary-200">
                                    <th className="p-4 font-semibold text-secondary-700">Transaction ID</th>
                                    <th className="p-4 font-semibold text-secondary-700">Student ID</th>
                                    <th className="p-4 font-semibold text-secondary-700">Date</th>
                                    <th className="p-4 font-semibold text-secondary-700">Amount</th>
                                    <th className="p-4 font-semibold text-secondary-700">Mode</th>
                                    <th className="p-4 font-semibold text-secondary-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feePayments.slice(0, 5).map((txn) => (
                                    <tr key={txn.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                                        <td className="p-4 font-mono text-secondary-600">{txn.id}</td>
                                        <td className="p-4 text-secondary-900">{txn.studentId}</td>
                                        <td className="p-4 text-secondary-600">{txn.date}</td>
                                        <td className="p-4 font-medium text-secondary-900">₹{txn.amount.toLocaleString()}</td>
                                        <td className="p-4 text-secondary-600">{txn.mode}</td>
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
                    <h1 className="text-2xl font-bold text-secondary-900">My Fees</h1>
                    <p className="text-secondary-500">Manage your fee payments and receipts</p>
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
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-secondary-900">Current Dues</h2>
                                <p className="text-secondary-500">{structure.semester}th Semester - {structure.academicYear}</p>
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
                                <p className="text-sm text-secondary-500 mb-1">Total Amount</p>
                                <p className="text-2xl font-bold text-secondary-900">₹{myFee.totalAmount.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500 mb-1">Paid Amount</p>
                                <p className="text-2xl font-bold text-green-600">₹{myFee.paidAmount.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500 mb-1">Due Amount</p>
                                <p className="text-2xl font-bold text-red-600">₹{myFee.dueAmount.toLocaleString()}</p>
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
                    <div className="bg-secondary-50 p-6 rounded-xl border border-secondary-200">
                        <h3 className="font-bold text-secondary-900 mb-4">Fee Breakdown</h3>
                        <div className="space-y-3">
                            {structure.components.map((comp, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                    <span className="text-secondary-600">{comp.name}</span>
                                    <span className="font-medium text-secondary-900">₹{comp.amount.toLocaleString()}</span>
                                </div>
                            ))}
                            <div className="border-t border-secondary-200 pt-3 flex justify-between font-bold text-secondary-900">
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
