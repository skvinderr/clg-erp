import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, GraduationCap, ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Login() {
    const [role, setRole] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            navigate('/dashboard');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    const roles = [
        { id: 'student', label: 'Student', icon: GraduationCap },
        { id: 'faculty', label: 'Faculty', icon: User },
        { id: 'admin', label: 'Admin', icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/login-bg-abstract.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]"></div>
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-md w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 dark:border-slate-700 overflow-hidden"
            >
                <div className="pt-10 pb-6 px-8 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                        <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2">
                        College ERP
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        Welcome back! Please login to your account.
                    </p>
                </div>

                <div className="px-8 pb-10">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Role Selection */}
                        <div className="p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-xl grid grid-cols-3 gap-1">
                            {roles.map((r) => {
                                const Icon = r.icon;
                                const isSelected = role === r.id;
                                return (
                                    <button
                                        key={r.id}
                                        type="button"
                                        onClick={() => setRole(r.id)}
                                        className={`flex flex-col items-center justify-center py-2 rounded-lg transition-all duration-200 ${isSelected
                                                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
                                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                                            }`}
                                    >
                                        <Icon className={`w-5 h-5 mb-1 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-current'}`} />
                                        <span className="text-[10px] uppercase tracking-wider">{r.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1.5 ml-1">Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="you@college.edu"
                                        className="pl-11 bg-slate-50 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 transition-all py-3 rounded-xl"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1.5 ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-11 bg-slate-50 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 transition-all py-3 rounded-xl"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end mt-2">
                                    <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">Forgot password?</a>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
                            Sign In <ArrowRight className="w-5 h-5" />
                        </Button>
                    </form>

                    {/* Quick Login Section */}
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-4">
                            Quick Access (Dev Mode)
                        </p>
                        <div className="flex gap-2 justify-center">
                            <button
                                onClick={() => login('admin@college.edu', 'password123').then(success => success && navigate('/dashboard'))}
                                className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-xs font-semibold flex flex-col items-center min-w-[80px]"
                            >
                                <ShieldCheck size={18} className="mb-1" /> Admin
                            </button>
                            <button
                                onClick={() => login('student@college.edu', 'password123').then(success => success && navigate('/student-portal'))}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-xs font-semibold flex flex-col items-center min-w-[80px]"
                            >
                                <GraduationCap size={18} className="mb-1" /> Student
                            </button>
                            <button
                                onClick={() => login('faculty@college.edu', 'password123').then(success => success && navigate('/faculty-dashboard'))}
                                className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors text-xs font-semibold flex flex-col items-center min-w-[80px]"
                            >
                                <User size={18} className="mb-1" /> Faculty
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
