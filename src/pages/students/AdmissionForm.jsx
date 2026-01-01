import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Upload, CheckCircle } from 'lucide-react';

export default function AdmissionForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', dob: '', gender: '',
        fatherName: '', motherName: '', guardianPhone: '',
        sscSchool: '', sscPercentage: '', hscSchool: '', hscPercentage: '',
        branch: 'Computer Science', category: 'General',
        bloodGroup: '', medicalConditions: '', scholarshipEligible: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            alert('Student admitted successfully!');
            navigate('/students');
        }, 1000);
    };

    const StepIndicator = ({ number, title, active }) => (
        <div className={`flex items-center gap-2 ${active ? 'text-primary-600' : 'text-secondary-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
        ${active ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-500'}`}>
                {number}
            </div>
            <span className="font-medium hidden md:block">{title}</span>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <button onClick={() => navigate('/students')} className="p-2 hover:bg-secondary-100 rounded-full">
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">New Admission</h1>
                    <p className="text-secondary-500">Enter student details for enrollment</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex justify-between px-12">
                <StepIndicator number={1} title="Personal Details" active={step >= 1} />
                <div className={`h-1 flex-1 mx-4 self-center ${step >= 2 ? 'bg-primary-600' : 'bg-secondary-100'}`} />
                <StepIndicator number={2} title="Family Info" active={step >= 2} />
                <div className={`h-1 flex-1 mx-4 self-center ${step >= 3 ? 'bg-primary-600' : 'bg-secondary-100'}`} />
                <StepIndicator number={3} title="Academic History" active={step >= 3} />
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-secondary-200">

                {/* Step 1: Personal Details */}
                {step === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-xl font-semibold text-secondary-800 border-b pb-2">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">First Name</label>
                                <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Last Name</label>
                                <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Phone</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Date of Birth</label>
                                <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={handleNext} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">Next Step</button>
                        </div>
                    </div>
                )}

                {/* Step 2: Family Info */}
                {step === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-xl font-semibold text-secondary-800 border-b pb-2">Family & Guardian</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Father's Name</label>
                                <input required name="fatherName" value={formData.fatherName} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Mother's Name</label>
                                <input required name="motherName" value={formData.motherName} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Guardian Phone</label>
                                <input required type="tel" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Category</label>
                                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                                    <option value="General">General</option>
                                    <option value="OBC">OBC</option>
                                    <option value="SC">SC</option>
                                    <option value="ST">ST</option>
                                    <option value="EWS">EWS</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-secondary-200">
                            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Medical & Scholarship</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Blood Group</label>
                                    <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                                        <option value="">Select Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Medical Conditions (if any)</label>
                                    <input name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} placeholder="e.g. Asthma, Diabetes" className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                                </div>
                                <div className="md:col-span-2 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="scholarshipEligible"
                                        name="scholarshipEligible"
                                        checked={formData.scholarshipEligible}
                                        onChange={(e) => setFormData({ ...formData, scholarshipEligible: e.target.checked })}
                                        className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                                    />
                                    <label htmlFor="scholarshipEligible" className="text-sm font-medium text-secondary-700">Student is eligible for Scholarship</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-secondary-600 px-6 py-2 rounded-lg hover:bg-secondary-100">Back</button>
                            <button type="button" onClick={handleNext} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">Next Step</button>
                        </div>
                    </div>
                )}

                {/* Step 3: Academic History */}
                {step === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-xl font-semibold text-secondary-800 border-b pb-2">Academic History & Enrollment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">SSC (10th) School Name</label>
                                <input required name="sscSchool" value={formData.sscSchool} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">SSC Percentage</label>
                                <input required type="number" name="sscPercentage" value={formData.sscPercentage} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">HSC (12th) School Name</label>
                                <input required name="hscSchool" value={formData.hscSchool} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">HSC Percentage</label>
                                <input required type="number" name="hscPercentage" value={formData.hscPercentage} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Enrollment Branch</label>
                                <select name="branch" value={formData.branch} onChange={handleChange} className="w-full p-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Mechanical">Mechanical</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Civil">Civil</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center hover:bg-secondary-50 cursor-pointer transition-colors">
                                <Upload className="mx-auto text-secondary-400 mb-2" size={32} />
                                <p className="text-sm text-secondary-600">Click to upload documents (Mark sheets, ID Proof)</p>
                                <p className="text-xs text-secondary-400 mt-1">PDF, JPG up to 5MB</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-secondary-600 px-6 py-2 rounded-lg hover:bg-secondary-100">Back</button>
                            <button type="submit" className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                                <CheckCircle size={20} />
                                Complete Admission
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
