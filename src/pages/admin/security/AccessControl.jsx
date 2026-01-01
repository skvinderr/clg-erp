import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { securityPolicies } from '../../../data/mockData';
import {
    ArrowLeft, Lock, Shield, Clock, Save, AlertTriangle
} from 'lucide-react';

const AccessControl = () => {
    const navigate = useNavigate();
    const [policies, setPolicies] = useState(securityPolicies);

    const handlePasswordChange = (field, value) => {
        setPolicies({
            ...policies,
            passwordPolicy: { ...policies.passwordPolicy, [field]: value }
        });
    };

    const handleSessionChange = (field, value) => {
        setPolicies({
            ...policies,
            sessionPolicy: { ...policies.sessionPolicy, [field]: value }
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin/security')}
                    className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600 dark:text-secondary-400" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Access Control</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Configure authentication policies</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Password Policy */}
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                    <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                        <Lock className="text-blue-600 dark:text-blue-400" />
                        Password Policy
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Minimum Length</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                value={policies.passwordPolicy.minLength}
                                onChange={(e) => handlePasswordChange('minLength', parseInt(e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={policies.passwordPolicy.requireUppercase}
                                    onChange={(e) => handlePasswordChange('requireUppercase', e.target.checked)}
                                    className="rounded text-primary-600 focus:ring-primary-500"
                                />
                                <span className="text-secondary-700 dark:text-secondary-300">Require Uppercase</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={policies.passwordPolicy.requireNumbers}
                                    onChange={(e) => handlePasswordChange('requireNumbers', e.target.checked)}
                                    className="rounded text-primary-600 focus:ring-primary-500"
                                />
                                <span className="text-secondary-700 dark:text-secondary-300">Require Numbers</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={policies.passwordPolicy.requireSymbols}
                                    onChange={(e) => handlePasswordChange('requireSymbols', e.target.checked)}
                                    className="rounded text-primary-600 focus:ring-primary-500"
                                />
                                <span className="text-secondary-700 dark:text-secondary-300">Require Symbols</span>
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Password Expiry (Days)</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                value={policies.passwordPolicy.expiryDays}
                                onChange={(e) => handlePasswordChange('expiryDays', parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                </div>

                {/* Session & Lockout */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <Clock className="text-orange-600 dark:text-orange-400" />
                            Session Management
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Session Timeout (Minutes)</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={policies.sessionPolicy.timeoutMinutes}
                                    onChange={(e) => handleSessionChange('timeoutMinutes', parseInt(e.target.value))}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Max Concurrent Sessions</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={policies.sessionPolicy.maxConcurrentSessions}
                                    onChange={(e) => handleSessionChange('maxConcurrentSessions', parseInt(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-6 flex items-center gap-2">
                            <Shield className="text-red-600 dark:text-red-400" />
                            Account Lockout
                        </h2>
                        <div className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg mb-4">
                            <AlertTriangle className="text-red-600 dark:text-red-400" />
                            <p className="text-sm text-red-700 dark:text-red-300">Strict lockout policies help prevent brute-force attacks.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Max Attempts</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={policies.lockoutPolicy.maxAttempts}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Duration (Min)</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={policies.lockoutPolicy.lockoutDurationMinutes}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="btn-primary flex items-center gap-2">
                    <Save size={18} />
                    <span>Save Policies</span>
                </button>
            </div>
        </div>
    );
};

export default AccessControl;
