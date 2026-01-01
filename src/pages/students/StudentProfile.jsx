import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, Mail, Phone, MapPin, BookOpen, Clock, CreditCard, AlertTriangle, Heart, Award, QrCode, X } from 'lucide-react';
import { students } from '../../data/mockData';

export default function StudentProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const student = students.find(s => s.id === id) || students[0]; // Fallback for demo
    const [activeTab, setActiveTab] = useState('personal');
    const [showIDCard, setShowIDCard] = useState(false);

    const handlePrintID = () => {
        window.print();
    };

    return (
        <div className="space-y-6">
            <button onClick={() => navigate('/students')} className="flex items-center text-secondary-600 hover:text-secondary-900">
                <ArrowLeft size={20} className="mr-2" /> Back to List
            </button>

            {/* Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-800"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12 mb-6">
                        <div className="flex items-end gap-6">
                            <img
                                src={student.photo}
                                alt={student.name}
                                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                            />
                            <div className="mb-2">
                                <h1 className="text-3xl font-bold text-secondary-900">{student.name}</h1>
                                <p className="text-secondary-500 font-medium">{student.rollNumber} • {student.branch}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowIDCard(true)}
                            className="flex items-center gap-2 bg-white border border-secondary-300 text-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-50 shadow-sm"
                        >
                            <CreditCard size={18} />
                            Generate ID Card
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-secondary-200 overflow-x-auto">
                        {['personal', 'academic', 'fees', 'health'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 font-medium text-sm capitalize transition-colors border-b-2 
                  ${activeTab === tab
                                        ? 'border-primary-600 text-primary-600'
                                        : 'border-transparent text-secondary-500 hover:text-secondary-700'}`}
                            >
                                {tab} Details
                            </button>
                        ))}
                    </div>

                    <div className="mt-8">
                        {/* Personal Tab */}
                        {activeTab === 'personal' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-secondary-900">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-secondary-600">
                                            <Mail size={20} />
                                            <span>{student.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-secondary-600">
                                            <Phone size={20} />
                                            <span>{student.phone}</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-secondary-600">
                                            <MapPin size={20} />
                                            <span>{student.address.street}, {student.address.city}, {student.address.state} - {student.address.zip}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-secondary-900">Guardian Details</h3>
                                    <div className="bg-secondary-50 p-6 rounded-xl border border-secondary-100">
                                        <p className="text-sm text-secondary-500 mb-1">Guardian Name</p>
                                        <p className="font-medium text-secondary-900 mb-4">{student.guardian.name} ({student.guardian.relation})</p>

                                        <p className="text-sm text-secondary-500 mb-1">Contact</p>
                                        <p className="font-medium text-secondary-900">{student.guardian.phone}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Academic Tab */}
                        {activeTab === 'academic' && (
                            <div className="space-y-8 animate-fadeIn">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <p className="text-blue-600 text-sm font-medium mb-1">Current CGPA</p>
                                        <p className="text-3xl font-bold text-blue-900">{student.academics.cgpa}</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                        <p className="text-green-600 text-sm font-medium mb-1">Attendance</p>
                                        <p className="text-3xl font-bold text-green-900">{student.academics.attendance}%</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                        <p className="text-purple-600 text-sm font-medium mb-1">Credits Earned</p>
                                        <p className="text-3xl font-bold text-purple-900">{student.academics.creditsEarned}</p>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                        <p className="text-red-600 text-sm font-medium mb-1">Backlogs</p>
                                        <p className="text-3xl font-bold text-red-900">{student.academics.backlogs}</p>
                                    </div>
                                </div>



                                <div>
                                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Current Semester Subjects</h3>
                                    <div className="bg-white border border-secondary-200 rounded-xl overflow-hidden mb-8">
                                        <table className="w-full text-left">
                                            <thead className="bg-secondary-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-sm font-medium text-secondary-600">Subject Code</th>
                                                    <th className="px-6 py-3 text-sm font-medium text-secondary-600">Subject Name</th>
                                                    <th className="px-6 py-3 text-sm font-medium text-secondary-600">Credits</th>
                                                    <th className="px-6 py-3 text-sm font-medium text-secondary-600">Faculty</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-secondary-200">
                                                <tr>
                                                    <td className="px-6 py-4 text-sm font-mono text-secondary-600">CS601</td>
                                                    <td className="px-6 py-4 font-medium text-secondary-900">Advanced Algorithms</td>
                                                    <td className="px-6 py-4 text-secondary-600">4</td>
                                                    <td className="px-6 py-4 text-secondary-600">Dr. Alan Turing</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 text-sm font-mono text-secondary-600">CS602</td>
                                                    <td className="px-6 py-4 font-medium text-secondary-900">Database Systems</td>
                                                    <td className="px-6 py-4 text-secondary-600">4</td>
                                                    <td className="px-6 py-4 text-secondary-600">Prof. Ada Lovelace</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 text-sm font-mono text-secondary-600">CS603</td>
                                                    <td className="px-6 py-4 font-medium text-secondary-900">Computer Networks</td>
                                                    <td className="px-6 py-4 text-secondary-600">3</td>
                                                    <td className="px-6 py-4 text-secondary-600">Dr. Grace Hopper</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {student.academics.previousSemesters && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Previous Semesters Performance</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                                {student.academics.previousSemesters.map((sem) => (
                                                    <div key={sem.sem} className="bg-white p-4 rounded-xl border border-secondary-200 text-center">
                                                        <p className="text-secondary-500 text-sm mb-1">Semester {sem.sem}</p>
                                                        <p className="text-xl font-bold text-secondary-900">{sem.sgpa} SGPA</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Fees Tab */}
                        {activeTab === 'fees' && (
                            <div className="animate-fadeIn">
                                <div className="flex items-center justify-between bg-white p-6 rounded-xl border border-secondary-200 shadow-sm mb-6">
                                    <div>
                                        <p className="text-secondary-500 text-sm mb-1">Total Fee (Yearly)</p>
                                        <p className="text-2xl font-bold text-secondary-900">₹{student.fees.amount.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-secondary-500 text-sm mb-1">Payment Status</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                      ${student.fees.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {student.fees.status}
                                        </span>
                                    </div>
                                </div>

                                {student.fees.due > 0 && (
                                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
                                        <AlertTriangle className="text-orange-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900">Pending Dues Alert</h4>
                                            <p className="text-orange-700 text-sm mt-1">
                                                An amount of <strong>₹{student.fees.due.toLocaleString()}</strong> is pending for the current semester.
                                                Please clear the dues before the upcoming examinations to avoid hall ticket blocking.
                                            </p>
                                            <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700">
                                                Pay Now
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {/* Health & Other Tab */}
                        {activeTab === 'health' && student.health && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                                        <Heart className="text-red-500" size={20} />
                                        Medical Records
                                    </h3>
                                    <div className="bg-white p-6 rounded-xl border border-secondary-200 space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-secondary-500">Blood Group</p>
                                                <p className="font-medium text-secondary-900">{student.health.bloodGroup}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-secondary-500">Emergency Contact</p>
                                                <p className="font-medium text-secondary-900">{student.health.emergencyContact}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-secondary-500">Height</p>
                                                <p className="font-medium text-secondary-900">{student.health.height}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-secondary-500">Weight</p>
                                                <p className="font-medium text-secondary-900">{student.health.weight}</p>
                                            </div>
                                        </div>
                                        <div className="pt-4 border-t border-secondary-100">
                                            <p className="text-sm text-secondary-500 mb-1">Allergies</p>
                                            <p className="font-medium text-red-600">{student.health.allergies}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-secondary-500 mb-1">Medical Conditions</p>
                                            <p className="font-medium text-secondary-900">{student.health.conditions}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                                        <Award className="text-yellow-500" size={20} />
                                        Scholarship & Benefits
                                    </h3>
                                    {student.scholarship && (
                                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="font-bold text-yellow-900">{student.scholarship.name}</h4>
                                                    <p className="text-yellow-700 text-sm">Status: {student.scholarship.status}</p>
                                                </div>
                                                <span className="bg-white text-yellow-800 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                                                    ₹{student.scholarship.amount.toLocaleString()}
                                                </span>
                                            </div>
                                            <p className="text-sm text-yellow-800">
                                                This scholarship has been applied to the current academic year fees.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div>

            {/* ID Card Modal */}
            {
                showIDCard && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
                            <div className="p-4 border-b border-secondary-200 flex justify-between items-center bg-secondary-50">
                                <h3 className="font-bold text-secondary-900">Student ID Card</h3>
                                <button onClick={() => setShowIDCard(false)} className="text-secondary-500 hover:text-secondary-900">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-8 flex flex-col items-center text-center" id="id-card-print">
                                <div className="w-full bg-primary-700 h-24 rounded-t-xl mb-[-40px]"></div>
                                <img
                                    src={student.photo}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover z-10 bg-white"
                                />
                                <h2 className="text-2xl font-bold text-secondary-900 mt-4">{student.name}</h2>
                                <p className="text-primary-600 font-medium text-lg">{student.rollNumber}</p>

                                <div className="mt-6 w-full space-y-3 text-left">
                                    <div className="flex justify-between border-b border-secondary-100 pb-2">
                                        <span className="text-secondary-500">Branch</span>
                                        <span className="font-medium text-secondary-900">{student.branch}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-secondary-100 pb-2">
                                        <span className="text-secondary-500">DOB</span>
                                        <span className="font-medium text-secondary-900">{student.dob}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-secondary-100 pb-2">
                                        <span className="text-secondary-500">Blood Group</span>
                                        <span className="font-medium text-secondary-900">{student.bloodGroup}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-secondary-100 pb-2">
                                        <span className="text-secondary-500">Valid Thru</span>
                                        <span className="font-medium text-secondary-900">June 2025</span>
                                    </div>
                                </div>

                                <div className="mt-8 mb-4">
                                    <QrCode size={80} className="text-secondary-900" />
                                </div>
                                <p className="text-xs text-secondary-400">Scan to verify student identity</p>
                            </div>

                            <div className="p-4 border-t border-secondary-200 flex justify-end gap-3 bg-secondary-50">
                                <button
                                    onClick={() => setShowIDCard(false)}
                                    className="px-4 py-2 text-secondary-600 hover:bg-secondary-200 rounded-lg"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handlePrintID}
                                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center gap-2"
                                >
                                    <Printer size={18} />
                                    Print
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
