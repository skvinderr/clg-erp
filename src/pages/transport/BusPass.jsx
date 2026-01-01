import React from 'react';
import { useNavigate } from 'react-router-dom';
import { studentTransport, transportRoutes } from '../../data/mockData';
import {
    ArrowLeft, QrCode, Download, Share2
} from 'lucide-react';

const BusPass = () => {
    const navigate = useNavigate();

    // Mock Student Data
    const student = {
        id: 'STU001',
        name: 'John Doe',
        course: 'B.Tech CS',
        year: '3rd Year',
        photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'
    };

    const transport = studentTransport.find(t => t.studentId === student.id);
    const route = transportRoutes.find(r => r.id === transport?.routeId);

    if (!transport) return <div>No bus pass found.</div>;

    return (
        <div className="max-w-md mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/transport')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Digital Bus Pass</h1>
                    <p className="text-secondary-500">Valid till {transport.validTill}</p>
                </div>
            </div>

            {/* Pass Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-secondary-200 relative">
                {/* Header */}
                <div className="bg-primary-600 p-6 text-center text-white">
                    <h2 className="text-xl font-bold">College Transport</h2>
                    <p className="text-primary-100 text-sm">Student Bus Pass</p>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-md -mt-16 mb-4 overflow-hidden bg-secondary-200">
                        <img src={student.photo} alt={student.name} className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-xl font-bold text-secondary-900">{student.name}</h3>
                    <p className="text-secondary-500 mb-6">{student.id} • {student.course}</p>

                    <div className="w-full space-y-4 mb-8">
                        <div className="flex justify-between border-b border-secondary-100 pb-2">
                            <span className="text-secondary-500 text-sm">Route</span>
                            <span className="font-bold text-secondary-900">{route?.routeNo}</span>
                        </div>
                        <div className="flex justify-between border-b border-secondary-100 pb-2">
                            <span className="text-secondary-500 text-sm">Pickup Point</span>
                            <span className="font-bold text-secondary-900">{transport.stop}</span>
                        </div>
                        <div className="flex justify-between border-b border-secondary-100 pb-2">
                            <span className="text-secondary-500 text-sm">Valid Until</span>
                            <span className="font-bold text-green-600">{transport.validTill}</span>
                        </div>
                    </div>

                    {/* QR Code Mock */}
                    <div className="bg-white p-2 border border-secondary-200 rounded-lg mb-4">
                        <QrCode size={120} className="text-secondary-900" />
                    </div>
                    <p className="text-xs text-secondary-400 text-center">Scan this QR code for attendance</p>
                </div>

                {/* Footer */}
                <div className="bg-secondary-50 p-4 flex gap-4 border-t border-secondary-100">
                    <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                        <Share2 size={18} />
                        Share
                    </button>
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                        <Download size={18} />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusPass;
