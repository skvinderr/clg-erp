import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard, Users, GraduationCap, CalendarCheck, FileText,
    CreditCard, Library, BarChart3, ChevronLeft, ChevronRight, BedDouble,
    Bus, Briefcase, Shield, LogOut, Plug, Code, Brain, MessageCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { useAuth } from '../context/AuthContext';

export function Sidebar({ collapsed, setCollapsed }) {
    const { user, hasRole, logout } = useAuth();

    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const navGroups = [
        {
            title: "Main",
            items: [
                { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', roles: ['Admin'] },
                { icon: LayoutDashboard, label: 'Dashboard', path: '/student-portal', roles: ['Student'] },
                { icon: Shield, label: 'Administration', path: '/admin', roles: ['Admin'] },
                { icon: Users, label: 'Students', path: '/students', roles: ['Admin', 'Faculty'] },
                { icon: GraduationCap, label: 'Faculty', path: '/faculty', roles: ['Admin'] },
            ]
        },
        {
            title: "Academic",
            items: [
                { icon: CalendarCheck, label: 'Attendance', path: '/attendance', roles: ['Admin', 'Faculty'] },
                { icon: FileText, label: 'Examinations', path: '/examinations', roles: ['Admin', 'Faculty'] },
                { icon: BarChart3, label: 'Reports', path: '/reports', roles: ['Admin'] },
            ]
        },
        {
            title: "Campus",
            items: [
                { icon: CreditCard, label: 'Fees', path: '/fees', roles: ['Admin', 'Student'] },
                { icon: Library, label: 'Library', path: '/library', roles: ['Admin', 'Faculty', 'Student'] },
                { icon: BedDouble, label: 'Hostel', path: '/hostel', roles: ['Admin', 'Student'] },
                { icon: Bus, label: 'Transport', path: '/transport', roles: ['Admin', 'Student'] },
                { icon: Briefcase, label: 'Placement', path: '/placement', roles: ['Admin', 'Student'] },
            ]
        },
        {
            title: "Advanced",
            items: [
                { icon: MessageCircle, label: 'Collaboration', path: '/collaboration', roles: ['Admin', 'Faculty', 'Student'] },
                { icon: Plug, label: 'Integrations', path: '/admin/integrations', roles: ['Admin'] },
                { icon: Code, label: 'Developer API', path: '/admin/api', roles: ['Admin'] },
                { icon: Brain, label: 'AI Analytics', path: '/admin/analytics', roles: ['Admin'] },
                { icon: CalendarCheck, label: 'Smart Timetable', path: '/admin/smart-timetable', roles: ['Admin'] },
            ]
        }
    ];

    return (
        <aside
            className={clsx(
                "bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 transition-all duration-300 flex flex-col z-20",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="h-16 flex items-center justify-between px-4 mb-2">
                {!collapsed && (
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800 dark:text-white">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                        <span>College<span className="text-blue-600">ERP</span></span>
                    </div>
                )}
                {collapsed && (
                    <div className="w-full flex justify-center">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={clsx(
                        "p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors",
                        collapsed && "mx-auto mt-2"
                    )}
                >
                    {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2 px-3 space-y-6">
                {navGroups.map((group, groupIndex) => {
                    const filteredItems = group.items.filter(item => hasRole(item.roles));
                    if (filteredItems.length === 0) return null;

                    return (
                        <div key={groupIndex}>
                            {!collapsed && (
                                <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    {group.title}
                                </h3>
                            )}
                            <div className="space-y-1">
                                {filteredItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => clsx(
                                            "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group font-medium",
                                            isActive
                                                ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm"
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200",
                                            collapsed && "justify-center px-2"
                                        )}
                                    >
                                        <item.icon className={clsx("w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100", collapsed ? "w-6 h-6" : "")} />
                                        {!collapsed && <span>{item.label}</span>}

                                        {collapsed && (
                                            <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                                {item.label}
                                            </div>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className={clsx("flex items-center gap-3", collapsed ? "flex-col justify-center" : "justify-between")}>
                    <div className={clsx("flex items-center gap-3 flex-1 overflow-hidden", collapsed && "justify-center")}>
                        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm flex-shrink-0">
                            {getInitials(user?.name)}
                        </div>
                        {!collapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user?.name || 'User'}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.role || 'Guest'}</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={logout}
                        className={clsx(
                            "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors",
                            collapsed && "mt-2"
                        )}
                        title="Logout"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </aside>
    );
}
