import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { students } from '../../data/mockData';
import {
    ArrowLeft, Save, Calculator, AlertTriangle, CheckCircle
} from 'lucide-react';

const GradeEntry = () => {
    const navigate = useNavigate();
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [marks, setMarks] = useState({});

    // Filter students based on selection (Mock logic)
    const classStudents = selectedClass ? students.filter(s => s.semester === 6) : [];

    const handleMarkChange = (studentId, field, value) => {
        const numValue = Math.min(Math.max(0, parseInt(value) || 0), field === 'internal' ? 40 : 60);

        setMarks(prev => {
            const studentMarks = prev[studentId] || { internal: 0, external: 0 };
            const updatedMarks = { ...studentMarks, [field]: numValue };
            const total = updatedMarks.internal + updatedMarks.external;

            let grade = 'F';
            if (total >= 90) grade = 'O';
            else if (total >= 80) grade = 'A+';
            else if (total >= 70) grade = 'A';
            else if (total >= 60) grade = 'B+';
            else if (total >= 50) grade = 'B';
            else if (total >= 40) grade = 'P';

            return {
                ...prev,
                [studentId]: { ...updatedMarks, total, grade }
            };
        });
    };

    const handleSubmit = () => {
        // Mock submit
        alert('Grades submitted successfully!');
        navigate('/examinations');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/examinations')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Grade Entry</h1>
                    <p className="text-secondary-500">Enter internal and external marks</p>
                </div>
            </div>

            {/* Selection Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </select>
                </div>
            </div>

            {selectedClass && selectedSubject && (
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-4 border-b border-secondary-200 bg-secondary-50 flex justify-between items-center">
                        <h2 className="font-bold text-secondary-900">Student List ({classStudents.length})</h2>
                        <div className="text-sm text-secondary-500 flex gap-4">
                            <span>Max Internal: 40</span>
                            <span>Max External: 60</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-secondary-200">
                                    <th className="p-4 font-semibold text-secondary-700 w-1/3">Student</th>
                                    <th className="p-4 font-semibold text-secondary-700">Internal (40)</th>
                                    <th className="p-4 font-semibold text-secondary-700">External (60)</th>
                                    <th className="p-4 font-semibold text-secondary-700">Total (100)</th>
                                    <th className="p-4 font-semibold text-secondary-700">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classStudents.map((student) => {
                                    const studentMarks = marks[student.id] || { internal: 0, external: 0, total: 0, grade: '-' };
                                    return (
                                        <tr key={student.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={student.photo} alt={student.name} className="w-8 h-8 rounded-full object-cover" />
                                                    <div>
                                                        <p className="font-medium text-secondary-900">{student.name}</p>
                                                        <p className="text-xs text-secondary-500">{student.rollNumber}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    min="0" max="40"
                                                    className="w-20 p-2 border border-secondary-200 rounded focus:ring-2 focus:ring-primary-500 focus:outline-none"
                                                    value={studentMarks.internal || ''}
                                                    onChange={(e) => handleMarkChange(student.id, 'internal', e.target.value)}
                                                />
                                            </td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    min="0" max="60"
                                                    className="w-20 p-2 border border-secondary-200 rounded focus:ring-2 focus:ring-primary-500 focus:outline-none"
                                                    value={studentMarks.external || ''}
                                                    onChange={(e) => handleMarkChange(student.id, 'external', e.target.value)}
                                                />
                                            </td>
                                            <td className="p-4 font-bold text-secondary-900">{studentMarks.total}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-sm font-bold ${studentMarks.grade === 'F' ? 'bg-red-100 text-red-700' :
                                                        studentMarks.grade === 'O' ? 'bg-green-100 text-green-700' :
                                                            'bg-secondary-100 text-secondary-700'
                                                    }`}>
                                                    {studentMarks.grade}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-secondary-200 bg-secondary-50 flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="btn-primary flex items-center gap-2 px-8"
                        >
                            <Save size={20} />
                            <span>Submit Grades</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GradeEntry;
