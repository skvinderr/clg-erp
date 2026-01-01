import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exams } from '../../data/mockData';
import {
    ArrowLeft, Calendar, Clock, MapPin, Download,
    Printer, Filter, Search
} from 'lucide-react';

const ExamSchedule = () => {
    const navigate = useNavigate();
    const [selectedExamId, setSelectedExamId] = useState(exams[0].id);
    const selectedExam = exams.find(e => e.id === selectedExamId);

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
                    <h1 className="text-2xl font-bold text-secondary-900">Exam Schedule</h1>
                    <p className="text-secondary-500">View and manage examination timetables</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-4 w-full md:w-auto">
                    <select
                        className="p-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white min-w-[250px]"
                        value={selectedExamId}
                        onChange={(e) => setSelectedExamId(e.target.value)}
                    >
                        {exams.map(exam => (
                            <option key={exam.id} value={exam.id}>{exam.title}</option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button className="btn-secondary flex items-center gap-2 justify-center flex-1 md:flex-none">
                        <Printer size={18} />
                        <span>Print</span>
                    </button>
                    <button className="btn-primary flex items-center gap-2 justify-center flex-1 md:flex-none">
                        <Download size={18} />
                        <span>Download Hall Ticket</span>
                    </button>
                </div>
            </div>

            {/* Exam Details */}
            {selectedExam && (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-secondary-900">{selectedExam.title}</h2>
                                <p className="text-secondary-600">
                                    {new Date(selectedExam.startDate).toLocaleDateString()} - {new Date(selectedExam.endDate).toLocaleDateString()}
                                </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedExam.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                                    selectedExam.status === 'Ongoing' ? 'bg-green-100 text-green-700' :
                                        'bg-secondary-100 text-secondary-700'
                                }`}>
                                {selectedExam.status}
                            </span>
                        </div>

                        {selectedExam.timetable.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-secondary-50 border-b border-secondary-200">
                                            <th className="p-4 font-semibold text-secondary-700">Date</th>
                                            <th className="p-4 font-semibold text-secondary-700">Time</th>
                                            <th className="p-4 font-semibold text-secondary-700">Subject Code</th>
                                            <th className="p-4 font-semibold text-secondary-700">Subject Name</th>
                                            <th className="p-4 font-semibold text-secondary-700">Room</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedExam.timetable.map((paper, idx) => (
                                            <tr key={idx} className="border-b border-secondary-100 hover:bg-secondary-50">
                                                <td className="p-4 font-medium text-secondary-900">
                                                    {new Date(paper.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                                                </td>
                                                <td className="p-4 text-secondary-600 flex items-center gap-2">
                                                    <Clock size={16} />
                                                    {paper.time}
                                                </td>
                                                <td className="p-4 text-secondary-600 font-mono">{paper.code}</td>
                                                <td className="p-4 font-medium text-secondary-900">{paper.subject}</td>
                                                <td className="p-4 text-secondary-600 flex items-center gap-2">
                                                    <MapPin size={16} />
                                                    {paper.room}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-secondary-500 bg-secondary-50 rounded-lg border border-dashed border-secondary-300">
                                <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                                <p>Timetable not yet released for this examination.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamSchedule;
