import React from 'react';
import { useNavigate } from 'react-router-dom';
import { transportVehicles, transportDrivers } from '../../data/mockData';
import {
    ArrowLeft, Plus, Bus, Wrench, FileText, AlertCircle
} from 'lucide-react';

const VehicleManagement = () => {
    const navigate = useNavigate();

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
                    <h1 className="text-2xl font-bold text-secondary-900">Fleet Management</h1>
                    <p className="text-secondary-500">Track vehicles, maintenance, and drivers</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="btn-primary flex items-center gap-2">
                    <Plus size={18} />
                    <span>Add Vehicle</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transportVehicles.map((vehicle) => {
                    const driver = transportDrivers.find(d => d.id === vehicle.driverId);

                    return (
                        <div key={vehicle.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                            <div className="p-4 border-b border-secondary-100 flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-secondary-900 text-lg">{vehicle.regNo}</h3>
                                    <p className="text-sm text-secondary-500">{vehicle.model}</p>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-bold ${vehicle.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {vehicle.status}
                                </span>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-secondary-600">Capacity</span>
                                    <span className="font-medium text-secondary-900">{vehicle.capacity} Seats</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-secondary-600">Mileage</span>
                                    <span className="font-medium text-secondary-900">{vehicle.mileage.toLocaleString()} km</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-secondary-600">Last Service</span>
                                    <span className="font-medium text-secondary-900">{vehicle.lastService}</span>
                                </div>

                                <div className="bg-secondary-50 p-3 rounded-lg flex items-center gap-3">
                                    <div className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center text-secondary-500">
                                        <Bus size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-secondary-500">Assigned Driver</p>
                                        <p className="font-medium text-secondary-900 truncate">{driver?.name || 'Unassigned'}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <button className="flex-1 py-2 border border-secondary-200 rounded-lg text-sm font-medium text-secondary-600 hover:bg-secondary-50 flex items-center justify-center gap-2">
                                        <Wrench size={16} />
                                        Service
                                    </button>
                                    <button className="flex-1 py-2 border border-secondary-200 rounded-lg text-sm font-medium text-secondary-600 hover:bg-secondary-50 flex items-center justify-center gap-2">
                                        <FileText size={16} />
                                        Docs
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VehicleManagement;
