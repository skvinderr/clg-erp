import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { transportRoutes, transportVehicles } from '../../data/mockData';
import {
    ArrowLeft, Plus, MapPin, Clock, Bus
} from 'lucide-react';

const RouteManagement = () => {
    const navigate = useNavigate();
    const [selectedRoute, setSelectedRoute] = useState(null);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/transport')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Route Management</h1>
                    <p className="text-secondary-500">Manage bus routes and stops</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="btn-primary flex items-center gap-2">
                    <Plus size={18} />
                    <span>Add New Route</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Route List */}
                <div className="lg:col-span-1 space-y-4">
                    {transportRoutes.map((route) => (
                        <div
                            key={route.id}
                            onClick={() => setSelectedRoute(route)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedRoute?.id === route.id
                                    ? 'bg-primary-50 border-primary-500 shadow-sm'
                                    : 'bg-white border-secondary-200 hover:border-primary-300'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-secondary-900">{route.routeNo}</h3>
                                <span className="text-xs bg-secondary-100 text-secondary-600 px-2 py-1 rounded">
                                    {route.time}
                                </span>
                            </div>
                            <p className="text-sm text-secondary-600 mb-2">{route.start} ➝ {route.end}</p>
                            <div className="flex items-center gap-2 text-xs text-secondary-500">
                                <Bus size={14} />
                                <span>Bus: {transportVehicles.find(v => v.id === route.busId)?.regNo}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map / Details View */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                    {selectedRoute ? (
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-bold text-secondary-900">Route Details: {selectedRoute.routeNo}</h2>
                                    <p className="text-secondary-500">Assigned Vehicle: {transportVehicles.find(v => v.id === selectedRoute.busId)?.regNo}</p>
                                </div>
                                <button className="text-primary-600 hover:underline text-sm font-medium">Edit Route</button>
                            </div>

                            {/* Route Timeline */}
                            <div className="relative pl-8 border-l-2 border-secondary-200 space-y-8">
                                {selectedRoute.stops.map((stop, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-4 border-primary-500"></div>
                                        <h4 className="font-bold text-secondary-900">{stop}</h4>
                                        <p className="text-sm text-secondary-500">Stop #{index + 1}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Mock Map */}
                            <div className="h-64 bg-secondary-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                <MapPin className="text-red-500 mb-2" size={32} />
                                <p className="text-secondary-500 font-medium">Map View Placeholder</p>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-secondary-400">
                            <Navigation size={48} className="mb-4 opacity-50" />
                            <p>Select a route to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RouteManagement;
