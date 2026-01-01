import React from 'react';
import { useNavigate } from 'react-router-dom';
import { feeStructures } from '../../data/mockData';
import {
    ArrowLeft, Plus, Edit2, Trash2, DollarSign
} from 'lucide-react';

const FeeStructure = () => {
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
                    <h1 className="text-2xl font-bold text-secondary-900">Fee Structures</h1>
                    <p className="text-secondary-500">Manage fee components for different programs</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="btn-primary flex items-center gap-2">
                    <Plus size={18} />
                    <span>Add New Structure</span>
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {feeStructures.map((structure) => (
                    <div key={structure.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                        <div className="p-6 border-b border-secondary-100 flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-secondary-900">{structure.program} - {structure.department}</h2>
                                <p className="text-secondary-500">{structure.semester}th Semester • {structure.academicYear}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                    <Edit2 size={18} />
                                </button>
                                <button className="p-2 text-secondary-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {structure.components.map((comp, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-secondary-50 last:border-0">
                                        <span className="text-secondary-700">{comp.name}</span>
                                        <span className="font-medium text-secondary-900">₹{comp.amount.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-secondary-200 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-secondary-500">Due Date: <span className="font-medium text-secondary-900">{structure.dueDate}</span></p>
                                    <p className="text-xs text-red-500 mt-1">Late Fee: {structure.lateFeeRule}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-secondary-500">Total Amount</p>
                                    <p className="text-2xl font-bold text-primary-600">₹{structure.totalAmount.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeeStructure;
