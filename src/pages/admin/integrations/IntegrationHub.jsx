import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CreditCard, MessageSquare, Smartphone, Server,
    CheckCircle, AlertCircle, Settings, ExternalLink
} from 'lucide-react';

const IntegrationHub = () => {
    const navigate = useNavigate();

    const [integrations, setIntegrations] = useState([
        {
            id: 'payment',
            name: 'Payment Gateways',
            description: 'Manage Razorpay, Stripe, and other payment providers.',
            icon: CreditCard,
            status: 'Active',
            connected: 2,
            color: 'text-blue-600',
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            path: '/admin/integrations/payments'
        },
        {
            id: 'communication',
            name: 'Communication',
            description: 'SMS gateways (Twilio) and Email services (SendGrid).',
            icon: MessageSquare,
            status: 'Warning',
            connected: 1,
            color: 'text-green-600',
            bg: 'bg-green-50 dark:bg-green-900/20',
            path: '/admin/integrations/communication' // Placeholder
        },
        {
            id: 'hardware',
            name: 'Hardware Devices',
            description: 'Biometric scanners and RFID readers configuration.',
            icon: Smartphone,
            status: 'Inactive',
            connected: 0,
            color: 'text-purple-600',
            bg: 'bg-purple-50 dark:bg-purple-900/20',
            path: '/admin/integrations/hardware' // Placeholder
        },
        {
            id: 'storage',
            name: 'Cloud Storage',
            description: 'AWS S3 and Google Drive integration for file storage.',
            icon: Server,
            status: 'Active',
            connected: 1,
            color: 'text-orange-600',
            bg: 'bg-orange-50 dark:bg-orange-900/20',
            path: '/admin/integrations/storage' // Placeholder
        }
    ]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Integration Hub</h1>
                <p className="text-secondary-500 dark:text-secondary-400">Manage third-party services and connections</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrations.map((integration) => (
                    <div
                        key={integration.id}
                        className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg ${integration.bg}`}>
                                <integration.icon size={24} className={integration.color} />
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${integration.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                    integration.status === 'Warning' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                        'bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-400'
                                }`}>
                                {integration.status === 'Active' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                {integration.status}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-2">{integration.name}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm mb-4 h-10">{integration.description}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-secondary-100 dark:border-secondary-800">
                            <span className="text-xs font-medium text-secondary-500 dark:text-secondary-400">
                                {integration.connected} Services Connected
                            </span>
                            <button
                                onClick={() => navigate(integration.path)}
                                className="flex items-center gap-1 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                            >
                                <Settings size={16} />
                                Configure
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-secondary-800 rounded-full shadow-sm">
                        <ExternalLink className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-primary-900 dark:text-primary-100">Need a custom integration?</h3>
                        <p className="text-primary-700 dark:text-primary-300 text-sm">Check our API documentation to build your own connectors.</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/admin/api')}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                    View Developer API
                </button>
            </div>
        </div>
    );
};

export default IntegrationHub;
