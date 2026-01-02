import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    CalendarCheck,
    FileText,
    CreditCard,
    Library,
    BarChart3,
    ChevronLeft,
    ChevronRight,
    BedDouble,
    Bus,
    Briefcase,

    Shield,
    LogOut,
    Plug,
    Code,
    Brain,
    MessageCircle
} from 'lucide-react';
import { clsx } from 'clsx';

import { useAuth } from '../context/AuthContext';

export function Sidebar({ collapsed, setCollapsed }) {
    const { user, hasRole, logout } = useAuth();

    // Helper to get initials
    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };


    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', roles: ['Admin'] },
        { icon: LayoutDashboard, label: 'Dashboard', path: '/student-portal', roles: ['Student'] },
        { icon: Shield, label: 'Administration', path: '/admin', roles: ['Admin'] },
        { icon: Users, label: 'Students', path: '/students', roles: ['Admin', 'Faculty'] },
        { icon: GraduationCap, label: 'Faculty', path: '/faculty', roles: ['Admin'] },
        { icon: CalendarCheck, label: 'Attendance', path: '/attendance', roles: ['Admin', 'Faculty'] },
        { icon: FileText, label: 'Examinations', path: '/examinations', roles: ['Admin', 'Faculty'] },
        { icon: CreditCard, label: 'Fees', path: '/fees', roles: ['Admin', 'Student'] },
        { icon: Library, label: 'Library', path: '/library', roles: ['Admin', 'Faculty', 'Student'] },
        { icon: BedDouble, label: 'Hostel', path: '/hostel', roles: ['Admin', 'Student'] },
        { icon: Bus, label: 'Transport', path: '/transport', roles: ['Admin', 'Student'] },
        { icon: Briefcase, label: 'Placement', path: '/placement', roles: ['Admin', 'Student'] },
        { icon: Plug, label: 'Integrations', path: '/admin/integrations', roles: ['Admin'] },
        { icon: Code, label: 'Developer API', path: '/admin/api', roles: ['Admin'] },
        { icon: Brain, label: 'AI Analytics', path: '/admin/analytics', roles: ['Admin'] },
        { icon: CalendarCheck, label: 'Smart Timetable', path: '/admin/smart-timetable', roles: ['Admin'] },
        { icon: MessageCircle, label: 'Collaboration', path: '/collaboration', roles: ['Admin', 'Faculty', 'Student'] },
        { icon: BarChart3, label: 'Reports', path: '/reports', roles: ['Admin'] },
    ];

    const filteredNavItems = navItems.filter(item => hasRole(item.roles));

    return (
        <aside
            className={clsx(
                "bg-white dark:bg-secondary-900 border-r border-secondary-200 dark:border-secondary-800 h-screen sticky top-0 transition-all duration-300 flex flex-col z-20",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="h-16 flex items-center justify-between px-4 border-b border-secondary-100 dark:border-secondary-800">
                {!collapsed && (
                    <div className="flex items-center gap-2 font-bold text-xl text-primary-700 dark:text-primary-400">
                        <GraduationCap className="w-8 h-8" />
                        <span>College ERP</span>
                    </div>
                )}
                {collapsed && (
                    <div className="w-full flex justify-center">
                        <GraduationCap className="w-8 h-8 text-primary-700 dark:text-primary-400" />
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={clsx(
                        "p-1.5 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-500 dark:text-secondary-400 transition-colors",
                        collapsed && "hidden"
                    )}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {filteredNavItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                            isActive
                                ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium"
                                : "text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 hover:text-secondary-900 dark:hover:text-secondary-200",
                            collapsed && "justify-center px-2"
                        )}
                    >
                        <item.icon className={clsx("w-5 h-5 flex-shrink-0", collapsed ? "w-6 h-6" : "")} />
                        {!collapsed && <span>{item.label}</span>}

                        {/* Tooltip for collapsed state */}
                        {collapsed && (
                            <div className="absolute left-full ml-2 px-2 py-1 bg-secondary-900 dark:bg-secondary-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                {item.label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </div>

            <div className="p-4 border-t border-secondary-100 dark:border-secondary-800">
                <div className={clsx("flex items-center gap-3", collapsed ? "flex-col justify-center" : "justify-between")}>
                    <div className={clsx("flex items-center gap-3 flex-1 overflow-hidden", collapsed && "justify-center")}>
                        <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-400 font-bold text-xs flex-shrink-0">
                            {getInitials(user?.name)}
                        </div>
                        {!collapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-secondary-900 dark:text-secondary-100 truncate">{user?.name || 'User'}</p>
                                <p className="text-xs text-secondary-500 dark:text-secondary-400 truncate">{user?.role || 'Guest'}</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={logout}
                        className={clsx(
                            "p-2 text-secondary-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors",
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
