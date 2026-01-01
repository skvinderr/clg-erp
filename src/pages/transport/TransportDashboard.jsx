import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { transportRoutes, transportVehicles, studentTransport } from '../../data/mockData';
import {
    Bus, MapPin, Navigation, AlertTriangle, CreditCard,
    Settings, Users
} from 'lucide-react';

const TransportDashboard = () => {
    const { user, hasRole } = useAuth();
    const navigate = useNavigate();

    // Admin View
    if (hasRole(['Admin'])) {
        const totalVehicles = transportVehicles.length;
        const activeVehicles = transportVehicles.filter(v => v.status === 'Active').length;
        const maintenanceVehicles = transportVehicles.filter(v => v.status === 'Maintenance').length;
        const totalRoutes = transportRoutes.length;

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900">Transport Management</h1>
                        <p className="text-secondary-500">Fleet, routes, and student transport</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/transport/vehicles')}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <Bus size={18} />
                            <span>Fleet Manager</span>
                        </button>
                        <button
                            onClick={() => navigate('/transport/routes')}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Navigation size={18} />
                            <span>Route Manager</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Bus size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{activeVehicles} / {totalVehicles}</h3>
                        <p className="text-secondary-500 text-sm">Active Vehicles</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <MapPin size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{totalRoutes}</h3>
                        <p className="text-secondary-500 text-sm">Total Routes</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                <Settings size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-1">{maintenanceVehicles}</h3>
                        <p className="text-secondary-500 text-sm">Vehicles in Maintenance</p>
                    </div>
                </div>

                {/* Live Tracking Map Placeholder */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 bg-secondary-50 flex justify-between items-center">
                        <h3 className="font-bold text-secondary-900">Live Fleet Tracking</h3>
                        <span className="text-xs text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Live Updates
                        </span>
                    </div>
                    <div className="h-64 bg-secondary-100 flex items-center justify-center relative">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <p className="text-secondary-500 font-medium z-10">Interactive Map Integration</p>
                        {/* Mock Bus Icons */}
                        <div className="absolute top-1/4 left-1/4 p-2 bg-blue-600 text-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                            <Bus size={16} />
                        </div>
                        <div className="absolute bottom-1/3 right-1/3 p-2 bg-blue-600 text-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                            <Bus size={16} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Student View
    const studentId = 'STU001'; // Mock ID
    const myTransport = studentTransport.find(t => t.studentId === studentId);
    const myRoute = transportRoutes.find(r => r.id === myTransport?.routeId);
    const myBus = transportVehicles.find(v => v.id === myRoute?.busId);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">My Transport</h1>
                    <p className="text-secondary-500">Bus pass and route details</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/transport/pass')}
                        className="btn-primary flex items-center gap-2"
                    >
                        <CreditCard size={18} />
                        <span>View Bus Pass</span>
                    </button>
                </div>
            </div>

            {/* My Route Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                    <Bus className="text-primary-500" />
                    Route Details
                </h3>
                {myTransport ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-secondary-50 pb-2">
                                <span className="text-secondary-600">Route Number</span>
                                <span className="font-medium text-secondary-900">{myRoute?.routeNo}</span>
                            </div>
                            <div className="flex justify-between border-b border-secondary-50 pb-2">
                                <span className="text-secondary-600">Bus Number</span>
                                <span className="font-medium text-secondary-900">{myBus?.regNo}</span>
                            </div>
                            <div className="flex justify-between border-b border-secondary-50 pb-2">
                                <span className="text-secondary-600">Pickup Stop</span>
                                <span className="font-medium text-secondary-900">{myTransport.stop}</span>
                            </div>
                            <div className="flex justify-between border-b border-secondary-50 pb-2">
                                <span className="text-secondary-600">Pickup Time</span>
                                <span className="font-medium text-secondary-900">{myRoute?.time}</span>
                            </div>
                        </div>

                        <div className="bg-secondary-50 p-4 rounded-lg">
                            <h4 className="font-medium text-secondary-900 mb-3">Driver Contact</h4>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center text-secondary-500">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p className="font-medium text-secondary-900">Ramesh Kumar</p>
                                    <p className="text-sm text-secondary-500">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 text-secondary-500">
                        <p>You have not opted for transport facility.</p>
                        <button className="mt-4 text-primary-600 font-medium hover:underline">Apply for Bus Pass</button>
                    </div>
                )}
            </div>

            {/* Live Tracking Link */}
            {myTransport && (
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Navigation size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-blue-900">Track Your Bus</h3>
                            <p className="text-sm text-blue-700">See live location and estimated arrival time</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Track Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default TransportDashboard;
