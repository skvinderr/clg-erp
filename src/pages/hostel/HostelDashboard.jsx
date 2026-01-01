import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { hostelBuildings, hostelRooms, hostelComplaints } from '../../data/mockData';
import {
    Home, Users, Utensils, AlertCircle, BedDouble,
    ClipboardList, ArrowRight
} from 'lucide-react';

const HostelDashboard = () => {
    const { user, hasRole } = useAuth();
    const navigate = useNavigate();

    // Admin View
    if (hasRole(['Admin'])) {
        const totalCapacity = hostelBuildings.reduce((acc, curr) => acc + curr.capacity, 0);
        const totalOccupants = hostelRooms.reduce((acc, curr) => acc + curr.occupants.length, 0);
        const pendingComplaints = hostelComplaints.filter(c => c.status === 'Pending').length;

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Hostel Management</h1>
                        <p className="text-secondary-500 dark:text-secondary-400">Overview of accommodation and facilities</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/hostel/mess')}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <Utensils size={18} />
                            <span>Mess Menu</span>
                        </button>
                        <button
                            onClick={() => navigate('/hostel/allocation')}
                            className="btn-primary flex items-center gap-2"
                        >
                            <BedDouble size={18} />
                            <span>Room Allocation</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                <Home size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">{totalOccupants} / {totalCapacity}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Total Occupancy</p>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                <Users size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">{hostelBuildings.length}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Hostel Buildings</p>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                                <AlertCircle size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-1">{pendingComplaints}</h3>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm">Pending Complaints</p>
                    </div>
                </div>

                {/* Recent Complaints */}
                <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-800/50 flex justify-between items-center">
                        <h3 className="font-bold text-secondary-900 dark:text-secondary-100">Recent Complaints</h3>
                        <button
                            onClick={() => navigate('/hostel/complaints')}
                            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                        >
                            View All
                        </button>
                    </div>
                    <div className="divide-y divide-secondary-100 dark:divide-secondary-800">
                        {hostelComplaints.slice(0, 5).map((complaint) => (
                            <div key={complaint.id} className="p-4 flex items-center justify-between hover:bg-secondary-50 dark:hover:bg-secondary-800/50">
                                <div>
                                    <h4 className="font-medium text-secondary-900 dark:text-secondary-100">{complaint.type} Issue</h4>
                                    <p className="text-sm text-secondary-500 dark:text-secondary-400">{complaint.description}</p>
                                    <p className="text-xs text-secondary-400 mt-1">Reported by {complaint.studentId} on {complaint.date}</p>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-bold ${complaint.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                    }`}>
                                    {complaint.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Student View
    const studentId = 'STU001'; // Mock ID
    const myRoom = hostelRooms.find(r => r.occupants.includes(studentId));
    const myBuilding = hostelBuildings.find(b => b.id === myRoom?.buildingId);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">My Hostel</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Manage your accommodation and mess</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/hostel/complaints')}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <AlertCircle size={18} />
                        <span>Report Issue</span>
                    </button>
                    <button
                        onClick={() => navigate('/hostel/mess')}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Utensils size={18} />
                        <span>Mess Menu</span>
                    </button>
                </div>
            </div>

            {/* My Room Info */}
            <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-4 flex items-center gap-2">
                    <Home className="text-primary-500" />
                    Accommodation Details
                </h3>
                {myRoom ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-secondary-50 dark:border-secondary-800 pb-2">
                                <span className="text-secondary-600 dark:text-secondary-400">Building</span>
                                <span className="font-medium text-secondary-900 dark:text-secondary-100">{myBuilding?.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-secondary-50 dark:border-secondary-800 pb-2">
                                <span className="text-secondary-600 dark:text-secondary-400">Room Number</span>
                                <span className="font-medium text-secondary-900 dark:text-secondary-100">{myRoom.number}</span>
                            </div>
                            <div className="flex justify-between border-b border-secondary-50 dark:border-secondary-800 pb-2">
                                <span className="text-secondary-600 dark:text-secondary-400">Floor</span>
                                <span className="font-medium text-secondary-900 dark:text-secondary-100">{myRoom.floor}</span>
                            </div>
                            <div className="flex justify-between border-b border-secondary-50 dark:border-secondary-800 pb-2">
                                <span className="text-secondary-600 dark:text-secondary-400">Room Type</span>
                                <span className="font-medium text-secondary-900 dark:text-secondary-100">{myRoom.type} Occupancy</span>
                            </div>
                        </div>

                        <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                            <h4 className="font-medium text-secondary-900 dark:text-secondary-100 mb-3">Roommates</h4>
                            <div className="space-y-2">
                                {myRoom.occupants.filter(id => id !== studentId).map(mate => (
                                    <div key={mate} className="flex items-center gap-3 bg-white dark:bg-secondary-700 p-2 rounded border border-secondary-100 dark:border-secondary-600">
                                        <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-xs font-bold">
                                            {mate.substring(0, 2)}
                                        </div>
                                        <span className="text-sm text-secondary-700 dark:text-secondary-200">{mate}</span>
                                    </div>
                                ))}
                                {myRoom.occupants.length === 1 && (
                                    <p className="text-sm text-secondary-500 dark:text-secondary-400 italic">No roommates assigned.</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 text-secondary-500">
                        <p>You have not been allocated a room yet.</p>
                        <button className="mt-4 text-primary-600 font-medium hover:underline">Request Allocation</button>
                    </div>
                )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors cursor-pointer" onClick={() => navigate('/hostel/mess')}>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg">
                            <Utensils size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary-900 dark:text-secondary-100">Today's Menu</h3>
                            <p className="text-sm text-secondary-500 dark:text-secondary-400">Check what's cooking</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                            <ClipboardList size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary-900 dark:text-secondary-100">Gate Pass</h3>
                            <p className="text-sm text-secondary-500 dark:text-secondary-400">Apply for leave / outing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostelDashboard;
