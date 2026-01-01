import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export default function DashboardLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-secondary-50 dark:bg-secondary-950 transition-colors duration-300">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>

                <footer className="bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800 py-4 px-6 text-center text-sm text-secondary-500 dark:text-secondary-400 transition-colors">
                    © {new Date().getFullYear()} College ERP System. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
