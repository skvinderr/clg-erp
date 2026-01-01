import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Shield, Database, FileText, Lock, Eye, Trash2
} from 'lucide-react';

const DataPrivacy = () => {
    const navigate = useNavigate();
    const [encryptionEnabled, setEncryptionEnabled] = useState(true);

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
                    <h1 className="text-2xl font-bold text-secondary-900">Data Privacy & Security</h1>
                    <p className="text-secondary-500">Manage encryption and data rights</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Data Security */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-lg font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Lock className="text-green-600" />
                            Data Encryption
                        </h2>
                        <div className="flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-lg mb-4">
                            <div className="flex items-center gap-3">
                                <Shield className="text-green-600" />
                                <div>
                                    <h3 className="font-bold text-green-900">End-to-End Encryption</h3>
                                    <p className="text-sm text-green-700">Sensitive data is encrypted at rest.</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={encryptionEnabled}
                                    onChange={() => setEncryptionEnabled(!encryptionEnabled)}
                                />
                                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                        <div className="text-sm text-secondary-500">
                            <p className="mb-2"><strong>Encrypted Fields:</strong> Passwords, Bank Details, Health Records.</p>
                            <p>Encryption Standard: AES-256</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-lg font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Database className="text-blue-600" />
                            Data Retention
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-secondary-700">Student Records</span>
                                <select className="border border-secondary-300 rounded px-2 py-1 text-sm">
                                    <option>5 Years after graduation</option>
                                    <option>10 Years after graduation</option>
                                    <option>Permanent</option>
                                </select>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-secondary-700">Financial Logs</span>
                                <select className="border border-secondary-300 rounded px-2 py-1 text-sm">
                                    <option>7 Years</option>
                                    <option>10 Years</option>
                                </select>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-secondary-700">Audit Logs</span>
                                <select className="border border-secondary-300 rounded px-2 py-1 text-sm">
                                    <option>1 Year</option>
                                    <option>2 Years</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GDPR & Rights */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h2 className="text-lg font-bold text-secondary-900 mb-6 flex items-center gap-2">
                        <FileText className="text-purple-600" />
                        GDPR Data Rights
                    </h2>

                    <div className="space-y-6">
                        <div className="p-4 border border-secondary-200 rounded-lg hover:border-purple-300 transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                                <Eye className="text-purple-600" size={20} />
                                <h3 className="font-bold text-secondary-900">Right to Access</h3>
                            </div>
                            <p className="text-sm text-secondary-500 mb-3">Generate a comprehensive report of all personal data held for a specific user.</p>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Enter User ID" className="flex-1 px-3 py-1 border border-secondary-300 rounded text-sm" />
                                <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">Generate</button>
                            </div>
                        </div>

                        <div className="p-4 border border-secondary-200 rounded-lg hover:border-red-300 transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                                <Trash2 className="text-red-600" size={20} />
                                <h3 className="font-bold text-secondary-900">Right to Erasure</h3>
                            </div>
                            <p className="text-sm text-secondary-500 mb-3">Permanently delete user data (subject to retention policies).</p>
                            <button className="w-full py-2 border border-red-200 text-red-600 text-sm font-medium rounded hover:bg-red-50">
                                Initiate Erasure Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPrivacy;
