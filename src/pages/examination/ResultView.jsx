import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { grades, students } from '../../data/mockData';
import {
    ArrowLeft, Award, Download, Share2, Printer,
    TrendingUp, BookOpen
} from 'lucide-react';

const ResultView = () => {
    const navigate = useNavigate();
    const [selectedStudentId, setSelectedStudentId] = useState(students[0].id);
    const studentResult = grades.find(g => g.studentId === selectedStudentId);
    const studentInfo = students.find(s => s.id === selectedStudentId);

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
                    <h1 className="text-2xl font-bold text-secondary-900">Examination Results</h1>
                    <p className="text-secondary-500">View grade cards and transcripts</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-4 w-full md:w-auto">
                    <select
                        className="p-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white min-w-[250px]"
                        value={selectedStudentId}
                        onChange={(e) => setSelectedStudentId(e.target.value)}
                    >
                        {students.map(student => (
                            <option key={student.id} value={student.id}>{student.name} ({student.rollNumber})</option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button className="btn-secondary flex items-center gap-2 justify-center flex-1 md:flex-none">
                        <Share2 size={18} />
                        <span>Share</span>
                    </button>
                    <button className="btn-primary flex items-center gap-2 justify-center flex-1 md:flex-none">
                        <Download size={18} />
                        <span>Download PDF</span>
                    </button>
                </div>
            </div>

            {/* Result Card */}
            {studentResult && studentInfo ? (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-200 max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center border-b border-secondary-200 pb-6 mb-6">
                        <h2 className="text-2xl font-bold text-secondary-900 uppercase tracking-wide">College of Engineering</h2>
                        <p className="text-secondary-500">End Semester Examination - Spring 2024</p>
                        <div className="mt-4 inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                            PASSED
                        </div>
                    </div>

                    {/* Student Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div>
                            <p className="text-xs text-secondary-500 uppercase font-bold">Student Name</p>
                            <p className="font-semibold text-secondary-900">{studentInfo.name}</p>
                        </div>
                        <div>
                            <p className="text-xs text-secondary-500 uppercase font-bold">Roll Number</p>
                            <p className="font-semibold text-secondary-900">{studentInfo.rollNumber}</p>
                        </div>
                        <div>
                            <p className="text-xs text-secondary-500 uppercase font-bold">Branch</p>
                            <p className="font-semibold text-secondary-900">{studentInfo.branch}</p>
                        </div>
                        <div>
                            <p className="text-xs text-secondary-500 uppercase font-bold">Semester</p>
                            <p className="font-semibold text-secondary-900">{studentResult.semester}</p>
                        </div>
                    </div>

                    {/* Grades Table */}
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-left border-collapse border border-secondary-200">
                            <thead>
                                <tr className="bg-secondary-50">
                                    <th className="p-3 border border-secondary-200 font-semibold text-secondary-700">Code</th>
                                    <th className="p-3 border border-secondary-200 font-semibold text-secondary-700">Subject</th>
                                    <th className="p-3 border border-secondary-200 font-semibold text-secondary-700 text-center">Credits</th>
                                    <th className="p-3 border border-secondary-200 font-semibold text-secondary-700 text-center">Grade</th>
                                    <th className="p-3 border border-secondary-200 font-semibold text-secondary-700 text-center">Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentResult.results.map((res, idx) => (
                                    <tr key={idx}>
                                        <td className="p-3 border border-secondary-200 font-mono text-secondary-600">{res.code}</td>
                                        <td className="p-3 border border-secondary-200 font-medium text-secondary-900">{res.subject}</td>
                                        <td className="p-3 border border-secondary-200 text-center text-secondary-600">{res.credits}</td>
                                        <td className="p-3 border border-secondary-200 text-center font-bold text-secondary-900">{res.grade}</td>
                                        <td className="p-3 border border-secondary-200 text-center text-secondary-600">{res.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-secondary-50 font-bold">
                                    <td colSpan="2" className="p-3 border border-secondary-200 text-right">Total</td>
                                    <td className="p-3 border border-secondary-200 text-center">
                                        {studentResult.results.reduce((acc, curr) => acc + curr.credits, 0)}
                                    </td>
                                    <td colSpan="2" className="p-3 border border-secondary-200"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-secondary-50 p-6 rounded-xl border border-secondary-200">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500">Semester GPA (SGPA)</p>
                                <p className="text-3xl font-bold text-secondary-900">{studentResult.sgpa}</p>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-secondary-300 hidden md:block"></div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-purple-600">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500">Cumulative GPA (CGPA)</p>
                                <p className="text-3xl font-bold text-secondary-900">{studentResult.cgpa}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-secondary-400">
                        <p>This is a computer-generated document. No signature is required.</p>
                        <p>Date of Issue: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12 text-secondary-500">
                    <AlertTriangle size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No results found for this student.</p>
                </div>
            )}
        </div>
    );
};

export default ResultView;
