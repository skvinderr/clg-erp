import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    GraduationCap, BookOpen, Users, ShieldCheck,
    ArrowRight, CheckCircle, BarChart, Globe,
    Database, Clock, Smartphone, Layers,
    Award, MapPin, Server, DollarSign, Calendar
} from 'lucide-react';

const LandingPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                College<span className="text-blue-500">ERP</span>
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-slate-300 hover:text-white transition-colors font-medium">Modules</a>
                            <a href="#process" className="text-slate-300 hover:text-white transition-colors font-medium">Process</a>
                            <a href="#stats" className="text-slate-300 hover:text-white transition-colors font-medium">Impact</a>
                            <Link to="/login" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/25">
                                Client Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
                {/* Background Network Effect */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <svg className="absolute top-0 right-0 w-1/2 h-full text-blue-500/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 text-sm font-semibold mb-6">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                #1 Rated Campus Management Solution
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                Intelligent <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Campus Automation
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                                Transform your institution with our comprehensive ERP. Streamline admissions, academics, and administration in one unified cloud platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/login" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
                                    Explore Demo <ArrowRight className="w-5 h-5" />
                                </Link>
                                <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all">
                                    Contact Sales
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* 3D Dashboard Mockup Container */}
                            <div className="relative" style={{ perspective: '1000px' }}>
                                <motion.div
                                    initial={{ rotateY: -15, rotateX: 5 }}
                                    animate={{
                                        rotateY: [-15, -5, -15],
                                        rotateX: [5, 0, 5],
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        rotateY: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        rotateX: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                                    }}
                                    className="bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden"
                                >
                                    {/* Mockup Header */}
                                    <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="ml-4 h-4 w-32 bg-slate-700 rounded-full opacity-50"></div>
                                    </div>

                                    {/* Mockup Body */}
                                    <div className="flex h-[350px]">
                                        {/* Sidebar */}
                                        <div className="w-16 bg-slate-800 border-r border-slate-700 flex flex-col items-center py-4 gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                                            <div className="w-8 h-8 bg-slate-700 rounded-lg opacity-50"></div>
                                            <div className="w-8 h-8 bg-slate-700 rounded-lg opacity-50"></div>
                                            <div className="w-8 h-8 bg-slate-700 rounded-lg opacity-50"></div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="flex-1 p-6 bg-slate-900">
                                            {/* Header Area */}
                                            <div className="flex justify-between items-center mb-6">
                                                <div>
                                                    <div className="h-5 w-32 bg-slate-700 rounded mb-2"></div>
                                                    <div className="h-3 w-20 bg-slate-800 rounded"></div>
                                                </div>
                                                <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                                            </div>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                                                        <div className="h-8 w-8 bg-blue-500/20 rounded mb-2"></div>
                                                        <div className="h-4 w-16 bg-slate-600 rounded mb-1"></div>
                                                        <div className="h-3 w-10 bg-slate-700 rounded"></div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Chart Area */}
                                            <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 h-32 relative overflow-hidden">
                                                <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                                                    {[40, 60, 45, 70, 50, 80, 65, 85].map((h, i) => (
                                                        <div key={i} className="w-full bg-blue-500/50 rounded-t" style={{ height: `${h}%` }}></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-12 top-16 bg-white p-3 rounded-lg shadow-xl border border-slate-200 z-20 max-w-[150px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-1.5 bg-green-100 rounded-full">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-800">Admission Done</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-green-500"></div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -left-8 bottom-24 bg-white p-3 rounded-lg shadow-xl border border-slate-200 z-20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-100 rounded-full">
                                            <Users className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">New Students</div>
                                            <div className="text-xs text-slate-500">+125 today</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -left-10 top-10 bg-white p-3 rounded-lg shadow-xl border border-slate-200 z-20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-yellow-100 rounded-full">
                                            <DollarSign className="w-4 h-4 text-yellow-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">Fees Collected</div>
                                            <div className="text-xs text-slate-500">$45k Received</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [8, -8, 8] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    className="absolute -right-8 bottom-12 bg-white p-3 rounded-lg shadow-xl border border-slate-200 z-20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-purple-100 rounded-full">
                                            <Calendar className="w-4 h-4 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">Exam Update</div>
                                            <div className="text-xs text-slate-500">Schedule Published</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Background Glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Working Process Section */}
            <section id="process" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Workflow</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">How College ERP Works</h3>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: Database, title: "Data Collection", desc: "Seamlessly gather student and faculty data into one secure system." },
                            { icon: Layers, title: "Centralized DB", desc: "Unified database architecture ensuring data integrity and access." },
                            { icon: Clock, title: "Automation", desc: "Automate attendance, fee collection, and result processing." },
                            { icon: ShieldCheck, title: "Secure Access", desc: "Role-based access control for Admins, Faculty, and Students." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="py-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 fixed-bg"></div>
                <div className="absolute inset-0 bg-slate-900/90"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "12+", label: "Years Experience", icon: Award },
                            { value: "22+", label: "States Covered", icon: MapPin },
                            { value: "1200+", label: "Active Clients", icon: Server },
                            { value: "100k+", label: "Students Enrolled", icon: Users }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <stat.icon className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features List Section */}
            <section id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Comprehensive Features for <br />
                                <span className="text-blue-600">Modern Institutions</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-8">
                                Our ERP system is packed with powerful modules designed to handle every aspect of campus administration.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "Dashboard Management", "Library Automation",
                                    "Smart Attendance", "Vehicle Tracking",
                                    "Online Homework", "Circulars & Notices",
                                    "Fee Management", "Student Tracking",
                                    "Exam Scheduler", "Hostel Management"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/login" className="text-blue-600 font-bold hover:text-blue-700 inline-flex items-center gap-2">
                                    View All Features <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <img
                                    src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg"
                                    alt="Features Illustration"
                                    className="w-full h-auto rounded-2xl shadow-lg mix-blend-multiply"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <Smartphone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Mobile Ready</h4>
                                        <p className="text-xs text-slate-500">Android & iOS App</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600">Access your dashboard on the go with our dedicated mobile application.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/cta-digital-horizon.png')] bg-cover bg-center fixed-bg"></div>
                <div className="absolute inset-0 bg-blue-950/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digitalize</span> Your Campus?
                    </h2>
                    <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        Join the league of smart institutions. Experience the power of future-ready College ERP today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link to="/login" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105">
                            Login to Portal
                        </Link>
                        <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/60">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <GraduationCap className="w-6 h-6 text-blue-500" />
                                <span className="text-xl font-bold text-white">College<span className="text-blue-500">ERP</span></span>
                            </div>
                            <p className="text-sm leading-relaxed max-w-xs">
                                A complete cloud-based solution for educational institutions to manage academic, administrative, and financial operations efficiently.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm">
                                <li>support@collegeerp.com</li>
                                <li>+1 (555) 123-4567</li>
                                <li>123 Education Lane, Tech City</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <div>&copy; 2026 College ERP System. All rights reserved.</div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
