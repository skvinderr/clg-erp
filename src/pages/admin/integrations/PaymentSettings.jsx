import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, CreditCard, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';

const PaymentSettings = () => {
    const navigate = useNavigate();
    const [showSecrets, setShowSecrets] = useState({});

    const [gateways, setGateways] = useState([
        {
            id: 'razorpay',
            name: 'Razorpay',
            enabled: true,
            mode: 'Test',
            apiKey: 'rzp_test_1234567890',
            apiSecret: '****************',
            webhookSecret: 'whsec_12345'
        },
        {
            id: 'stripe',
            name: 'Stripe',
            enabled: false,
            mode: 'Test',
            apiKey: 'pk_test_1234567890',
            apiSecret: '****************',
            webhookSecret: ''
        }
    ]);

    const toggleSecret = (id) => {
        setShowSecrets(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleToggleGateway = (id) => {
        setGateways(gateways.map(g =>
            g.id === id ? { ...g, enabled: !g.enabled } : g
        ));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin/integrations')}
                    className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600 dark:text-secondary-400" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Payment Gateways</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Configure payment providers and API keys</p>
                </div>
            </div>

            <div className="space-y-6">
                {gateways.map((gateway) => (
                    <div key={gateway.id} className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                        <div className="p-6 border-b border-secondary-100 dark:border-secondary-800 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <CreditCard className="text-blue-600 dark:text-blue-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100">{gateway.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${gateway.enabled ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-secondary-100 text-secondary-600 dark:bg-secondary-800 dark:text-secondary-400'
                                            }`}>
                                            {gateway.enabled ? 'Enabled' : 'Disabled'}
                                        </span>
                                        {gateway.enabled && (
                                            <span className="text-xs font-medium text-secondary-500 dark:text-secondary-400 border border-secondary-200 dark:border-secondary-700 px-2 py-0.5 rounded-full">
                                                {gateway.mode} Mode
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={gateway.enabled}
                                    onChange={() => handleToggleGateway(gateway.id)}
                                />
                                <div className="w-11 h-6 bg-secondary-200 dark:bg-secondary-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        {gateway.enabled && (
                            <div className="p-6 space-y-4 bg-secondary-50/50 dark:bg-secondary-800/20">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">API Key / Public Key</label>
                                        <input
                                            type="text"
                                            value={gateway.apiKey}
                                            readOnly
                                            className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">API Secret / Private Key</label>
                                        <div className="relative">
                                            <input
                                                type={showSecrets[gateway.id] ? "text" : "password"}
                                                value={gateway.apiSecret}
                                                readOnly
                                                className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                            />
                                            <button
                                                onClick={() => toggleSecret(gateway.id)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300"
                                            >
                                                {showSecrets[gateway.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Webhook Secret</label>
                                    <input
                                        type="text"
                                        value={gateway.webhookSecret}
                                        readOnly
                                        className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
                                    />
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                                        <Save size={18} />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentSettings;
