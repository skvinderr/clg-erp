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
    ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';

import { useAuth } from '../context/AuthContext';

export function Sidebar({ collapsed, setCollapsed }) {
    const { hasRole } = useAuth();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', roles: ['Admin'] },
        { icon: Users, label: 'Students', path: '/students', roles: ['Admin', 'Faculty'] },
        { icon: GraduationCap, label: 'Faculty', path: '/faculty', roles: ['Admin'] },
        { icon: CalendarCheck, label: 'Attendance', path: '/attendance', roles: ['Admin', 'Faculty'] },
        { icon: FileText, label: 'Examinations', path: '/examinations', roles: ['Admin', 'Faculty'] },
        { icon: CreditCard, label: 'Fees', path: '/fees', roles: ['Admin', 'Student'] },
        { icon: Library, label: 'Library', path: '/library', roles: ['Admin', 'Faculty', 'Student'] },
        { icon: BarChart3, label: 'Reports', path: '/reports', roles: ['Admin'] },
    ];

    const filteredNavItems = navItems.filter(item => hasRole(item.roles));

    return (
        <aside
            className={clsx(
                "bg-white border-r border-secondary-200 h-screen sticky top-0 transition-all duration-300 flex flex-col z-20",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="h-16 flex items-center justify-between px-4 border-b border-secondary-100">
                {!collapsed && (
                    <div className="flex items-center gap-2 font-bold text-xl text-primary-700">
                        <GraduationCap className="w-8 h-8" />
                        <span>College ERP</span>
                    </div>
                )}
                {collapsed && (
                    <div className="w-full flex justify-center">
                        <GraduationCap className="w-8 h-8 text-primary-700" />
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={clsx(
                        "p-1.5 rounded-lg hover:bg-secondary-100 text-secondary-500 transition-colors",
                        collapsed && "hidden" // Hide toggle on mobile/collapsed state if needed, but for now keep logic simple
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
                                ? "bg-primary-50 text-primary-700 font-medium"
                                : "text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900",
                            collapsed && "justify-center px-2"
                        )}
                    >
                        <item.icon className={clsx("w-5 h-5 flex-shrink-0", collapsed ? "w-6 h-6" : "")} />
                        {!collapsed && <span>{item.label}</span>}

                        {/* Tooltip for collapsed state */}
                        {collapsed && (
                            <div className="absolute left-full ml-2 px-2 py-1 bg-secondary-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                {item.label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </div>

            <div className="p-4 border-t border-secondary-100">
                <div className={clsx("flex items-center gap-3", collapsed && "justify-center")}>
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs">
                        JD
                    </div>
                    {!collapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-secondary-900 truncate">John Doe</p>
                            <p className="text-xs text-secondary-500 truncate">Administrator</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}
