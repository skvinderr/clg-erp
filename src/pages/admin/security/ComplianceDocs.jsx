import React from 'react';
import { useNavigate } from 'react-router-dom';
import { complianceDocuments } from '../../../data/mockData';
import {
    ArrowLeft, FileText, CheckCircle, Clock, Upload, Download
} from 'lucide-react';

const ComplianceDocs = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin/security')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Compliance Documents</h1>
                    <p className="text-secondary-500">Manage legal and regulatory documents</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="btn-primary flex items-center gap-2">
                    <Upload size={18} />
                    <span>Upload New Policy</span>
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-secondary-50 border-b border-secondary-200">
                        <tr>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Document Title</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Version</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Last Updated</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm">Status</th>
                            <th className="p-4 font-semibold text-secondary-600 text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-100">
                        {complianceDocuments.map((doc) => (
                            <tr key={doc.id} className="hover:bg-secondary-50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <FileText className="text-secondary-400" size={20} />
                                        <span className="font-medium text-secondary-900">{doc.title}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-secondary-600">{doc.version}</td>
                                <td className="p-4 text-secondary-600">{doc.lastUpdated}</td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${doc.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {doc.status === 'Active' ? <CheckCircle size={12} /> : <Clock size={12} />}
                                        {doc.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-blue-600 hover:underline text-sm font-medium flex items-center justify-end gap-1">
                                        <Download size={16} />
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Regulatory Compliance Status</h3>
                <p className="text-sm text-blue-700 mb-4">
                    The system is currently compliant with AICTE/UGC digital record-keeping guidelines.
                    Next audit scheduled for: <strong>March 15, 2024</strong>.
                </p>
                <button className="px-4 py-2 bg-white text-blue-700 font-bold rounded-lg border border-blue-200 hover:bg-blue-100">
                    View Audit Report
                </button>
            </div>
        </div>
    );
};

export default ComplianceDocs;
