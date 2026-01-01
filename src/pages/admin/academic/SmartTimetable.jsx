import React, { useState } from 'react';
import { Calendar, Clock, Users, BookOpen, Wand2, RefreshCw, CheckCircle } from 'lucide-react';

const SmartTimetable = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setGenerated(true);
        }, 2000);
    };

    const mockSchedule = [
        { time: '09:00 AM', mon: 'Mathematics (Room 101)', tue: 'Physics (Lab 1)', wed: 'Chemistry (Room 102)', thu: 'English (Room 101)', fri: 'CS (Lab 2)' },
        { time: '10:00 AM', mon: 'Physics (Room 101)', tue: 'Mathematics (Room 101)', wed: 'English (Room 102)', thu: 'Chemistry (Lab 1)', fri: 'Sports' },
        { time: '11:00 AM', mon: 'Break', tue: 'Break', wed: 'Break', thu: 'Break', fri: 'Break' },
        { time: '11:30 AM', mon: 'CS (Lab 2)', tue: 'English (Room 101)', wed: 'Mathematics (Room 102)', thu: 'Physics (Room 101)', fri: 'Library' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 flex items-center gap-2">
                    <Wand2 className="text-purple-600 dark:text-purple-400" />
                    Smart Timetable Generator
                </h1>
                <p className="text-secondary-500 dark:text-secondary-400">AI-powered schedule optimization</p>
            </div>

            {/* Configuration Panel */}
            <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 mb-4">Generation Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Department</label>
                        <select className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg">
                            <option>Computer Science</option>
                            <option>Electronics</option>
                            <option>Mechanical</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Semester</label>
                        <select className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 rounded-lg">
                            <option>Semester 1</option>
                            <option>Semester 3</option>
                            <option>Semester 5</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">Constraints</label>
                        <div className="flex gap-2">
                            <label className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                                <input type="checkbox" defaultChecked className="rounded text-primary-600" />
                                Avoid Gaps
                            </label>
                            <label className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                                <input type="checkbox" defaultChecked className="rounded text-primary-600" />
                                Max 4hrs/day
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition-all ${isGenerating ? 'opacity-70 cursor-wait' : 'hover:scale-105'}`}
                    >
                        {isGenerating ? <RefreshCw className="animate-spin" size={20} /> : <Wand2 size={20} />}
                        {isGenerating ? 'Optimizing Schedule...' : 'Generate with AI'}
                    </button>
                </div>
            </div>

            {/* Results */}
            {generated && (
                <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900/30 flex items-center gap-2">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                        <span className="font-medium text-green-800 dark:text-green-300">Schedule generated successfully with 98% optimization score.</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-secondary-50 dark:bg-secondary-800/50 border-b border-secondary-200 dark:border-secondary-800">
                                <tr>
                                    <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm w-32">Time</th>
                                    <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Monday</th>
                                    <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Tuesday</th>
                                    <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Wednesday</th>
                                    <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Thursday</th>
                                    <th className="p-4 font-semibold text-secondary-600 dark:text-secondary-300 text-sm">Friday</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                                {mockSchedule.map((slot, index) => (
                                    <tr key={index} className="hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
                                        <td className="p-4 font-bold text-secondary-900 dark:text-secondary-100 text-sm">{slot.time}</td>
                                        <td className="p-4 text-sm text-secondary-600 dark:text-secondary-400">{slot.mon}</td>
                                        <td className="p-4 text-sm text-secondary-600 dark:text-secondary-400">{slot.tue}</td>
                                        <td className="p-4 text-sm text-secondary-600 dark:text-secondary-400">{slot.wed}</td>
                                        <td className="p-4 text-sm text-secondary-600 dark:text-secondary-400">{slot.thu}</td>
                                        <td className="p-4 text-sm text-secondary-600 dark:text-secondary-400">{slot.fri}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SmartTimetable;
