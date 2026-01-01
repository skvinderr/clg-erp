import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { systemSettings } from '../../data/mockData';
import {
    ArrowLeft, Save, Globe, Bell, Shield, Database, Smartphone
} from 'lucide-react';

const SystemSettings = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState(systemSettings);

    const handleChange = (field, value) => {
        setSettings({ ...settings, [field]: value });
    };

    const handleNotificationChange = (type) => {
        setSettings({
            ...settings,
            notifications: {
                ...settings.notifications,
                [type]: !settings.notifications[type]
            }
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">System Settings</h1>
                    <p className="text-secondary-500">Configure global preferences</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* General Settings */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-lg font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Globe className="text-primary-600" />
                            General Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Institution Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={settings.institutionName}
                                    onChange={(e) => handleChange('institutionName', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Contact Email</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={settings.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={settings.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Theme</label>
                                <select
                                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    value={settings.theme}
                                    onChange={(e) => handleChange('theme', e.target.value)}
                                >
                                    <option>Light</option>
                                    <option>Dark</option>
                                    <option>System Default</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Address</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    rows="3"
                                    value={settings.address}
                                    onChange={(e) => handleChange('address', e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn-primary flex items-center gap-2">
                                <Save size={18} />
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-lg font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Bell className="text-orange-600" />
                            Notification Preferences
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded shadow-sm">
                                        <Smartphone size={20} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-secondary-900">Push Notifications</p>
                                        <p className="text-xs text-secondary-500">Send alerts to mobile app</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" checked={settings.notifications.push} onChange={() => handleNotificationChange('push')} />
                                    <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                            {/* Add more toggles similarly */}
                        </div>
                    </div>
                </div>

                {/* Side Panel */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-lg font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Database className="text-purple-600" />
                            Backup & Restore
                        </h2>
                        <p className="text-sm text-secondary-500 mb-4">Last backup: Today, 02:00 AM</p>
                        <button className="w-full py-2 bg-secondary-900 text-white font-medium rounded-lg hover:bg-secondary-800 mb-3">
                            Backup Now
                        </button>
                        <button className="w-full py-2 border border-secondary-300 text-secondary-700 font-medium rounded-lg hover:bg-secondary-50">
                            Restore Data
                        </button>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h2 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                            <Shield className="text-red-600" />
                            Danger Zone
                        </h2>
                        <p className="text-sm text-red-600 mb-4">Irreversible actions. Proceed with caution.</p>
                        <button className="w-full py-2 bg-white border border-red-200 text-red-600 font-medium rounded-lg hover:bg-red-50 mb-3">
                            Reset System
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemSettings;
