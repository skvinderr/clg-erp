import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { students } from '../../data/mockData';
import { ArrowLeft, Calendar, Clock, Save, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const MarkAttendance = () => {
    const navigate = useNavigate();
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [attendanceData, setAttendanceData] = useState({});

    // Filter students based on selection (Mock logic)
    const classStudents = selectedClass ? students.filter(s => s.semester === 6) : [];

    const handleMarkAll = (status) => {
        const newData = {};
        classStudents.forEach(s => {
            newData[s.id] = status;
        });
        setAttendanceData(newData);
    };

    const handleStatusChange = (studentId, status) => {
        setAttendanceData(prev => ({
            ...prev,
            [studentId]: status
        }));
    };

    const handleSubmit = () => {
        // Mock submit
        alert('Attendance submitted successfully!');
        navigate('/attendance');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/attendance')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Mark Attendance</h1>
                    <p className="text-secondary-500">Select class and subject to proceed</p>
                </div>
            </div>

            {/* Selection Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Class / Section</label>
                    <select
                        className="w-full p-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                    >
                        <option value="">Select Class</option>
                        <option value="CS-A">CS - Section A</option>
                        <option value="CS-B">CS - Section B</option>
                        <option value="ME-A">ME - Section A</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Subject</label>
                    <select
                        className="w-full p-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        <option value="">Select Subject</option>
                        <option value="Advanced Algorithms">Advanced Algorithms</option>
                        <option value="Web Technologies">Web Technologies</option>
                        <option value="Database Systems">Database Systems</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Date & Time</label>
                    <div className="flex items-center gap-2 p-2 border border-secondary-200 rounded-lg bg-secondary-50 text-secondary-600">
                        <Calendar size={18} />
                        <span>{new Date().toLocaleDateString()}</span>
                        <Clock size={18} className="ml-2" />
                        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            </div>

            {selectedClass && selectedSubject && (
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 flex justify-between items-center bg-secondary-50">
                        <h2 className="font-bold text-secondary-900">Student List ({classStudents.length})</h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleMarkAll('Present')}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                            >
                                Mark All Present
                            </button>
                            <button
                                onClick={() => handleMarkAll('Absent')}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                            >
                                Mark All Absent
                            </button>
                        </div>
                    </div>

                    <div className="divide-y divide-secondary-100">
                        {classStudents.map((student) => (
                            <div key={student.id} className="p-4 flex items-center justify-between hover:bg-secondary-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <img src={student.photo} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="font-medium text-secondary-900">{student.name}</p>
                                        <p className="text-xs text-secondary-500">{student.rollNumber}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleStatusChange(student.id, 'Present')}
                                        className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${attendanceData[student.id] === 'Present'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-secondary-100 text-secondary-500 hover:bg-secondary-200'
                                            }`}
                                    >
                                        <CheckCircle size={18} />
                                        <span className="text-sm font-medium hidden sm:inline">Present</span>
                                    </button>
                                    <button
                                        onClick={() => handleStatusChange(student.id, 'Absent')}
                                        className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${attendanceData[student.id] === 'Absent'
                                                ? 'bg-red-600 text-white'
                                                : 'bg-secondary-100 text-secondary-500 hover:bg-secondary-200'
                                            }`}
                                    >
                                        <XCircle size={18} />
                                        <span className="text-sm font-medium hidden sm:inline">Absent</span>
                                    </button>
                                    <button
                                        onClick={() => handleStatusChange(student.id, 'Late')}
                                        className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${attendanceData[student.id] === 'Late'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-secondary-100 text-secondary-500 hover:bg-secondary-200'
                                            }`}
                                    >
                                        <AlertCircle size={18} />
                                        <span className="text-sm font-medium hidden sm:inline">Late</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-secondary-200 bg-secondary-50 flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="btn-primary flex items-center gap-2 px-8"
                        >
                            <Save size={20} />
                            <span>Submit Attendance</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarkAttendance;
