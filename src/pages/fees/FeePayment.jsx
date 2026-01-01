import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentFees, feeStructures } from '../../data/mockData';
import {
    ArrowLeft, CreditCard, Lock, ShieldCheck, CheckCircle
} from 'lucide-react';

const FeePayment = () => {
    const navigate = useNavigate();
    const [paymentStep, setPaymentStep] = useState(1); // 1: Review, 2: Payment, 3: Success
    const [paymentMethod, setPaymentMethod] = useState('card');

    // Mock data for logged in student
    const studentId = 'STU001';
    const myFee = studentFees.find(f => f.studentId === studentId);
    const structure = feeStructures.find(s => s.id === myFee?.feeStructureId);

    const handlePayment = () => {
        // Mock payment processing
        setTimeout(() => {
            setPaymentStep(3);
        }, 1500);
    };

    if (!myFee || !structure) return <div>Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate('/fees')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Fee Payment</h1>
                    <p className="text-secondary-500">Secure online payment gateway</p>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8 px-12">
                {[
                    { step: 1, label: 'Review' },
                    { step: 2, label: 'Payment' },
                    { step: 3, label: 'Confirmation' }
                ].map((s) => (
                    <div key={s.step} className="flex flex-col items-center relative z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors ${paymentStep >= s.step ? 'bg-primary-600 text-white' : 'bg-secondary-200 text-secondary-500'
                            }`}>
                            {paymentStep > s.step ? <CheckCircle size={16} /> : s.step}
                        </div>
                        <span className={`text-xs font-medium ${paymentStep >= s.step ? 'text-primary-700' : 'text-secondary-500'
                            }`}>{s.label}</span>
                    </div>
                ))}
                {/* Progress Bar Background */}
                <div className="absolute left-0 w-full h-0.5 bg-secondary-200 top-[135px] -z-0 hidden md:block max-w-3xl mx-auto right-0" />
            </div>

            {paymentStep === 1 && (
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-6 border-b border-secondary-100">
                        <h2 className="text-lg font-bold text-secondary-900">Payment Summary</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex justify-between py-2 border-b border-secondary-50">
                            <span className="text-secondary-600">Student Name</span>
                            <span className="font-medium text-secondary-900">John Doe</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-secondary-50">
                            <span className="text-secondary-600">Fee Type</span>
                            <span className="font-medium text-secondary-900">{structure.program} Semester {structure.semester}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-secondary-50">
                            <span className="text-secondary-600">Total Due</span>
                            <span className="font-bold text-secondary-900">₹{myFee.dueAmount.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="p-6 bg-secondary-50 flex justify-end">
                        <button
                            onClick={() => setPaymentStep(2)}
                            className="btn-primary px-8"
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            )}

            {paymentStep === 2 && (
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                    <div className="p-6 border-b border-secondary-100">
                        <h2 className="text-lg font-bold text-secondary-900">Select Payment Method</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            {['card', 'upi', 'netbanking'].map((method) => (
                                <label key={method} className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === method ? 'border-primary-500 bg-primary-50' : 'border-secondary-200 hover:border-primary-200'
                                    }`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value={method}
                                        checked={paymentMethod === method}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="text-primary-600 focus:ring-primary-500"
                                    />
                                    <span className="font-medium text-secondary-900 capitalize">
                                        {method === 'card' ? 'Credit / Debit Card' : method === 'upi' ? 'UPI / QR Code' : 'Net Banking'}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                            <div className="flex items-center gap-2 text-green-700 font-medium mb-4">
                                <ShieldCheck size={20} />
                                <span>Secure Payment</span>
                            </div>
                            <p className="text-sm text-secondary-600 mb-6">
                                Your payment information is encrypted and secure. We do not store your card details.
                            </p>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-secondary-600">Amount to Pay</span>
                                <span className="text-2xl font-bold text-secondary-900">₹{myFee.dueAmount.toLocaleString()}</span>
                            </div>
                            <button
                                onClick={handlePayment}
                                className="w-full btn-primary flex items-center justify-center gap-2"
                            >
                                <Lock size={18} />
                                <span>Pay ₹{myFee.dueAmount.toLocaleString()}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {paymentStep === 3 && (
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-12 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary-900 mb-2">Payment Successful!</h2>
                    <p className="text-secondary-500 mb-8">Transaction ID: TXN{Math.floor(Math.random() * 1000000)}</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => navigate('/fees')}
                            className="btn-secondary"
                        >
                            Go to Dashboard
                        </button>
                        <button className="btn-primary">
                            Download Receipt
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeePayment;
