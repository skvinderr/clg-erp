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
            // Navigation is handled by the component based on role, 
            // but we need to wait for user state to update in AuthContext.
            // Actually, AuthContext updates user synchronously after await.
            // We can check the role from the user object if we had it, 
            // but login returns true/false.
            // Let's rely on the fact that if login succeeds, we can redirect.
            // Ideally we should check the role from the response, but for now:
            navigate('/dashboard');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    // ... (roles array remains same)

    const roles = [
        { id: 'student', label: 'Student', icon: GraduationCap },
        { id: 'faculty', label: 'Faculty', icon: User },
        { id: 'admin', label: 'Admin', icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen bg-secondary-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary-600 p-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <GraduationCap className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">College ERP</h1>
                    <p className="text-primary-100">Welcome back! Please login to your account.</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-2">Select Role</label>
                            <div className="grid grid-cols-3 gap-2">
                                {roles.map((r) => {
                                    const Icon = r.icon;
                                    return (
                                        <button
                                            key={r.id}
                                            type="button"
                                            onClick={() => setRole(r.id)}
                                            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200 ${role === r.id
                                                ? 'border-primary-500 bg-primary-50 text-primary-700'
                                                : 'border-secondary-200 hover:border-primary-200 hover:bg-secondary-50 text-secondary-600'
                                                }`}
                                        >
                                            <Icon className="w-6 h-6 mb-1" />
                                            <span className="text-xs font-medium">{r.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-secondary-400" />
                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="you@college.edu"
                                        className="pl-10"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-secondary-400" />
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-10"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" className="w-full flex items-center justify-center gap-2" size="lg">
                            Sign In <ArrowRight className="w-4 h-4" />
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-secondary-100">
                        <p className="text-xs font-semibold text-secondary-400 uppercase tracking-wider text-center mb-4">
                            Development Mode: Quick Login
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            <button
                                onClick={() => login('admin@college.edu', 'password123').then(success => success && navigate('/dashboard'))}
                                className="w-full py-2 px-4 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <ShieldCheck size={16} /> Login as Admin
                            </button>
                            <button
                                onClick={() => login('faculty@college.edu', 'password123').then(success => success && navigate('/faculty-dashboard'))}
                                className="w-full py-2 px-4 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <User size={16} /> Login as Faculty
                            </button>
                            <button
                                onClick={() => login('student@college.edu', 'password123').then(success => success && navigate('/student-portal'))}
                                className="w-full py-2 px-4 bg-orange-50 text-orange-700 hover:bg-orange-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <GraduationCap size={16} /> Login as Student
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-secondary-500">
                            Forgot your password? <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Contact Support</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
