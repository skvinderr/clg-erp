import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, BarChart2, PieChart, TrendingUp, Download, Calendar
} from 'lucide-react';

const ReportsAnalytics = () => {
    const navigate = useNavigate();

    const reports = [
        { title: 'Student Enrollment', type: 'Bar Chart', date: 'Updated today', color: 'bg-blue-500' },
        { title: 'Fee Collection', type: 'Line Graph', date: 'Updated yesterday', color: 'bg-green-500' },
        { title: 'Attendance Trends', type: 'Area Chart', date: 'Live', color: 'bg-purple-500' },
        { title: 'Library Usage', type: 'Pie Chart', date: 'Updated today', color: 'bg-orange-500' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/admin')}
                    className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600 dark:text-secondary-400" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">Reports & Analytics</h1>
                    <p className="text-secondary-500 dark:text-secondary-400">Insights and data visualization</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reports.map((report, index) => (
                    <div key={index} className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                        <div className={`w-12 h-12 ${report.color} rounded-lg mb-4 flex items-center justify-center text-white`}>
                            <BarChart2 size={24} />
                        </div>
                        <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-1">{report.title}</h3>
                        <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-4">{report.type} • {report.date}</p>
                        <button className="w-full py-2 border border-secondary-200 dark:border-secondary-700 rounded-lg text-secondary-600 dark:text-secondary-400 text-sm font-medium hover:bg-secondary-50 dark:hover:bg-secondary-800 flex items-center justify-center gap-2">
                            <Download size={16} />
                            Export PDF
                        </button>
                    </div>
                ))}
            </div>

            {/* Mock Chart Area */}
            <div className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-800">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-secondary-900 dark:text-secondary-100 flex items-center gap-2">
                        <TrendingUp className="text-primary-600 dark:text-primary-400" />
                        Enrollment Trends (2020-2024)
                    </h2>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded text-secondary-500 dark:text-secondary-400">
                            <Calendar size={20} />
                        </button>
                        <button className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded text-secondary-500 dark:text-secondary-400">
                            <Download size={20} />
                        </button>
                    </div>
                </div>

                <div className="h-64 flex items-end justify-between gap-4 px-4">
                    {[40, 65, 55, 80, 70, 90, 85].map((height, i) => (
                        <div key={i} className="w-full bg-primary-100 dark:bg-primary-900/20 rounded-t-lg relative group">
                            <div
                                className="absolute bottom-0 w-full bg-primary-600 dark:bg-primary-500 rounded-t-lg transition-all duration-500 group-hover:bg-primary-700 dark:group-hover:bg-primary-400"
                                style={{ height: `${height}%` }}
                            ></div>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary-900 dark:bg-secondary-100 text-white dark:text-secondary-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {height * 10} Students
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-secondary-500 dark:text-secondary-400 px-4">
                    <span>2018</span>
                    <span>2019</span>
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                </div>
            </div>
        </div>
    );
};

export default ReportsAnalytics;
