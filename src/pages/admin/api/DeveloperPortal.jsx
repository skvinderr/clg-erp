import React, { useState } from 'react';
import {
    Key, Webhook, FileText, Copy, RefreshCw, Trash2, Plus, Check
} from 'lucide-react';

const DeveloperPortal = () => {
    const [activeTab, setActiveTab] = useState('keys');
    const [apiKeys, setApiKeys] = useState([
        { id: 1, name: 'Mobile App Production', key: 'pk_live_51Hz...', created: '2023-12-01', lastUsed: '2 mins ago' },
        { id: 2, name: 'Test Environment', key: 'pk_test_51Hz...', created: '2024-01-15', lastUsed: '1 day ago' }
    ]);

    const [webhooks, setWebhooks] = useState([
        { id: 1, url: 'https://api.myapp.com/webhooks/payment', events: ['payment.success', 'payment.failed'], status: 'Active' }
    ]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Developer Portal</h1>
                <p className="text-secondary-500 dark:text-secondary-400">Manage API keys, webhooks, and documentation</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-secondary-200 dark:border-secondary-800">
                <button
                    onClick={() => setActiveTab('keys')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'keys'
                            ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                            : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                        }`}
                >
                    API Keys
                </button>
                <button
                    onClick={() => setActiveTab('webhooks')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'webhooks'
                            ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                            : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                        }`}
                >
                    Webhooks
                </button>
                <button
                    onClick={() => setActiveTab('docs')}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'docs'
                            ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                            : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                        }`}
                >
                    Documentation
                </button>
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                {activeTab === 'keys' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">Your API Keys</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                                <Plus size={18} />
                                Generate New Key
                            </button>
                        </div>

                        <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                                    <tr>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Name</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Key Token</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Created</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Last Used</th>
                                        <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                                    {apiKeys.map((key) => (
                                        <tr key={key.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                            <td className="p-4 font-medium text-secondary-900 dark:text-secondary-100">{key.name}</td>
                                            <td className="p-4 font-mono text-sm text-secondary-600 dark:text-secondary-400">
                                                <div className="flex items-center gap-2">
                                                    {key.key}
                                                    <button className="text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                                                        <Copy size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-4 text-secondary-500 dark:text-secondary-400 text-sm">{key.created}</td>
                                            <td className="p-4 text-secondary-500 dark:text-secondary-400 text-sm">{key.lastUsed}</td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-1 text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400" title="Roll Key">
                                                        <RefreshCw size={16} />
                                                    </button>
                                                    <button className="p-1 text-secondary-400 hover:text-red-600 dark:hover:text-red-400" title="Revoke">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'webhooks' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">Webhook Endpoints</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                                <Plus size={18} />
                                Add Endpoint
                            </button>
                        </div>

                        <div className="space-y-4">
                            {webhooks.map((hook) => (
                                <div key={hook.id} className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                                <Webhook className="text-purple-600 dark:text-purple-400" size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-secondary-900 dark:text-secondary-100 break-all">{hook.url}</h3>
                                                <div className="flex gap-2 mt-1">
                                                    {hook.events.map(event => (
                                                        <span key={event} className="text-xs px-2 py-0.5 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 rounded-full border border-secondary-200 dark:border-secondary-700">
                                                            {event}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded text-xs font-bold">
                                            {hook.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-end gap-3 border-t border-secondary-100 dark:border-secondary-800 pt-4">
                                        <button className="text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">Test Delivery</button>
                                        <button className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'docs' && (
                    <div className="bg-white dark:bg-secondary-900 p-8 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 text-center">
                        <div className="inline-block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
                            <FileText className="text-blue-600 dark:text-blue-400" size={48} />
                        </div>
                        <h2 className="text-xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">API Documentation</h2>
                        <p className="text-secondary-500 dark:text-secondary-400 mb-6 max-w-md mx-auto">
                            Explore our comprehensive REST API documentation with Swagger UI. Test endpoints directly from your browser.
                        </p>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                            Open Swagger UI
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeveloperPortal;
