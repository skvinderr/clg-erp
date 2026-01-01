import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hostelBuildings, hostelRooms } from '../../data/mockData';
import {
    ArrowLeft, BedDouble, UserPlus, Filter, Search
} from 'lucide-react';

const RoomAllocation = () => {
    const navigate = useNavigate();
    const [selectedBuilding, setSelectedBuilding] = useState(hostelBuildings[0]?.id);

    const filteredRooms = hostelRooms.filter(r => r.buildingId === selectedBuilding);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/hostel')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Room Allocation</h1>
                    <p className="text-secondary-500">Manage student accommodation</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-2 bg-secondary-50 p-1 rounded-lg">
                    {hostelBuildings.map((b) => (
                        <button
                            key={b.id}
                            onClick={() => setSelectedBuilding(b.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedBuilding === b.id
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-secondary-500 hover:text-secondary-700'
                                }`}
                        >
                            {b.name}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search Room..."
                        className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
            </div>

            {/* Room Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRooms.map((room) => {
                    const isFull = room.occupants.length >= room.capacity;
                    const occupancyRate = (room.occupants.length / room.capacity) * 100;

                    return (
                        <div key={room.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                            <div className="p-4 border-b border-secondary-100 flex justify-between items-center">
                                <h3 className="font-bold text-secondary-900 text-lg">Room {room.number}</h3>
                                <span className="text-xs font-medium text-secondary-500 bg-secondary-50 px-2 py-1 rounded">
                                    Floor {room.floor}
                                </span>
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-secondary-600">{room.type}</span>
                                    <div className={`px-2 py-1 rounded text-xs font-bold ${isFull ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                        {isFull ? 'Full' : `${room.capacity - room.occupants.length} Available`}
                                    </div>
                                </div>

                                {/* Occupancy Bar */}
                                <div className="w-full h-2 bg-secondary-100 rounded-full mb-4 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${isFull ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${occupancyRate}%` }}
                                    ></div>
                                </div>

                                {/* Occupants List */}
                                <div className="space-y-2 mb-4">
                                    {room.occupants.map((occ) => (
                                        <div key={occ} className="flex items-center gap-2 text-sm text-secondary-700">
                                            <div className="w-6 h-6 bg-secondary-200 rounded-full flex items-center justify-center text-xs">
                                                {occ.substring(0, 1)}
                                            </div>
                                            <span>{occ}</span>
                                        </div>
                                    ))}
                                    {room.occupants.length === 0 && (
                                        <p className="text-sm text-secondary-400 italic">No occupants</p>
                                    )}
                                </div>

                                <button
                                    disabled={isFull}
                                    className={`w-full py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors ${isFull
                                            ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
                                            : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                                        }`}
                                >
                                    <UserPlus size={16} />
                                    Allocate Student
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RoomAllocation;
