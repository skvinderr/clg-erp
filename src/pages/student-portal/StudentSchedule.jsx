import React from 'react';
import { ChevronLeft, Clock, MapPin, Calendar as CalendarIcon, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WeeklySchedule = () => {
    const navigate = useNavigate();

    // Mock Weekly Schedule Data
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = [
        '09:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 11:15 AM', // Break
        '11:15 AM - 12:15 PM',
        '12:15 PM - 01:15 PM', // Lunch
        '01:15 PM - 02:15 PM',
        '02:15 PM - 03:15 PM',
        '03:15 PM - 04:15 PM'
    ];

    const scheduleData = {
        Monday: [
            { subject: 'Advanced Algorithms', type: 'Lecture', room: 'LH-101', color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
            { subject: 'Database Systems', type: 'Lab', room: 'Lab-2', color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
            { type: 'Break' },
            { subject: 'Computer Networks', type: 'Lecture', room: 'LH-102', color: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
            { type: 'Lunch' },
            { subject: 'Operating Systems', type: 'Lecture', room: 'LH-103', color: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200' },
            { subject: 'Library / Self Study', type: 'Study', room: 'Library', color: 'bg-slate-100 text-slate-700', border: 'border-slate-200' },
            { subject: 'Sports / Extra Curricular', type: 'Activity', room: 'Ground', color: 'bg-pink-100 text-pink-700', border: 'border-pink-200' },
        ],
        Tuesday: [
            { subject: 'Software Engineering', type: 'Lecture', room: 'LH-105', color: 'bg-indigo-100 text-indigo-700', border: 'border-indigo-200' },
            { subject: 'Computer Networks', type: 'Lecture', room: 'LH-102', color: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
            { type: 'Break' },
            { subject: 'Advanced Algorithms', type: 'Lecture', room: 'LH-101', color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
            { type: 'Lunch' },
            { subject: 'Web Technologies', type: 'Lab', room: 'Lab-3', color: 'bg-teal-100 text-teal-700', border: 'border-teal-200' }, // Double slot simulation could be done, keeping simple for now
            { subject: 'Web Technologies', type: 'Lab', room: 'Lab-3', color: 'bg-teal-100 text-teal-700', border: 'border-teal-200' },
            { subject: 'Mentoring Session', type: 'Meeting', room: 'Fac-Cab', color: 'bg-yellow-100 text-yellow-700', border: 'border-yellow-200' },
        ],
        Wednesday: [
            { subject: 'Database Systems', type: 'Lecture', room: 'LH-104', color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
            { subject: 'Operating Systems', type: 'Lecture', room: 'LH-103', color: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200' },
            { type: 'Break' },
            { subject: 'Minor Project', type: 'Project', room: 'Lab-1', color: 'bg-red-100 text-red-700', border: 'border-red-200' },
            { type: 'Lunch' },
            { subject: 'Minor Project', type: 'Project', room: 'Lab-1', color: 'bg-red-100 text-red-700', border: 'border-red-200' },
            { subject: 'Technical Seminar', type: 'Seminar', room: 'Audit.', color: 'bg-cyan-100 text-cyan-700', border: 'border-cyan-200' },
            { subject: 'Free Slot', type: 'Free', room: '-', color: 'bg-slate-50 text-slate-400 dashed border border-slate-200', border: '' },
        ],
        Thursday: [
            { subject: 'Computer Networks', type: 'Lecture', room: 'LH-102', color: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
            { subject: 'Software Engineering', type: 'Lecture', room: 'LH-105', color: 'bg-indigo-100 text-indigo-700', border: 'border-indigo-200' },
            { type: 'Break' },
            { subject: 'Mobile App Dev', type: 'Elective', room: 'LH-106', color: 'bg-lime-100 text-lime-700', border: 'border-lime-200' },
            { type: 'Lunch' },
            { subject: 'Advanced Algorithms', type: 'Lab', room: 'Lab-4', color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
            { subject: 'Advanced Algorithms', type: 'Lab', room: 'Lab-4', color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
            { subject: 'Club Activities', type: 'Activity', room: 'Various', color: 'bg-rose-100 text-rose-700', border: 'border-rose-200' },
        ],
        Friday: [
            { subject: 'Operating Systems', type: 'Lab', room: 'Lab-2', color: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200' },
            { subject: 'Operating Systems', type: 'Lab', room: 'Lab-2', color: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200' },
            { type: 'Break' },
            { subject: 'Database Systems', type: 'Lecture', room: 'LH-104', color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
            { type: 'Lunch' },
            { subject: 'Aptitude Training', type: 'Training', room: 'LH-201', color: 'bg-violet-100 text-violet-700', border: 'border-violet-200' },
            { subject: 'Soft Skills', type: 'Training', room: 'LH-201', color: 'bg-violet-100 text-violet-700', border: 'border-violet-200' },
            { subject: 'Weekly Review', type: 'Meeting', room: 'Online', color: 'bg-gray-100 text-gray-700', border: 'border-gray-200' },
        ]
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                            <CalendarIcon className="w-6 h-6 text-blue-600" /> Weekly Class Schedule
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1 ml-1">Academic Year 2025-2026 • Semester 6</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <Download className="w-4 h-4" /> Download PDF
                </button>
            </div>

            {/* Timetable View */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px] border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-r border-slate-200 dark:border-slate-700 text-left min-w-[150px]">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Time / Day</span>
                                </th>
                                {weekDays.map(day => (
                                    <th key={day} className="p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-r border-slate-200 dark:border-slate-700 text-center last:border-r-0">
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{day}</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots.map((time, timeIndex) => {
                                const isBreak = time.includes('Break') || time.includes('Lunch');
                                return (
                                    <tr key={timeIndex} className="border-b border-slate-100 dark:border-slate-800 last:border-b-0">
                                        <td className="p-4 border-r border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10">
                                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                                <Clock className="w-3.5 h-3.5" /> {time}
                                            </div>
                                        </td>
                                        {weekDays.map((day, dayIndex) => {
                                            const classInfo = scheduleData[day][timeIndex];
                                            if (isBreak) {
                                                if (dayIndex === 0) { // Render break row logic could be simpler, but standard table cells work too
                                                    // Simply render the break cell
                                                }
                                            }

                                            if (!classInfo) return <td key={day} className="p-2 border-r border-slate-100 dark:border-slate-800"></td>;

                                            if (classInfo.type === 'Break' || classInfo.type === 'Lunch') {
                                                return (
                                                    <td key={day} className="p-1 bg-slate-100 dark:bg-slate-800/50 border-r border-white dark:border-slate-900">
                                                        <div className="h-full w-full flex items-center justify-center">
                                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -rotate-0">{classInfo.type}</span>
                                                        </div>
                                                    </td>
                                                );
                                            }

                                            return (
                                                <td key={day} className="p-2 border-r border-slate-100 dark:border-slate-800 align-top h-24">
                                                    {classInfo.type !== 'Free' ? (
                                                        <div className={`p-3 rounded-lg border ${classInfo.color} ${classInfo.border} h-full transition-all hover:shadow-md cursor-default group`}>
                                                            <div className="flex justify-between items-start mb-1">
                                                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{classInfo.type}</span>
                                                                <span className="text-[10px] font-semibold opacity-60 flex items-center gap-1">
                                                                    <MapPin className="w-3 h-3" /> {classInfo.room}
                                                                </span>
                                                            </div>
                                                            <p className="font-bold text-sm leading-tight text-current">{classInfo.subject}</p>
                                                        </div>
                                                    ) : (
                                                        <div className="h-full w-full rounded-lg border-2 border-dashed border-slate-100 dark:border-slate-700 flex items-center justify-center">
                                                            <span className="text-xs text-slate-300 font-medium">Free</span>
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-end">
                <p className="text-xs text-slate-400 italic">* Schedule is subject to change based on faculty availability and holidays.</p>
            </div>
        </div>
    );
};

export default WeeklySchedule;
