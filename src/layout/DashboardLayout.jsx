import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import AIChatbot from '../components/common/AIChatbot';

export default function DashboardLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                    <div className="max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>
                </main>

                <AIChatbot />

                <footer className="bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 py-4 px-6 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors">
                    © {new Date().getFullYear()} College ERP System. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
