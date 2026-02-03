import React, { useState } from 'react';
import { Bell, Search, Menu, Filter, Settings, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import ThemeToggle from '../components/common/ThemeToggle';
import QuickSearch from '../components/common/QuickSearch';
import { useAuth } from '../context/AuthContext';

export function Header({ collapsed, setCollapsed }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { user } = useAuth();

    return (
        <>
            <QuickSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 px-6 flex items-center justify-between transition-colors">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 lg:hidden"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="hidden md:flex items-center gap-4 w-96">
                        <div
                            className="relative flex-1 group"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                            <div className="w-full bg-slate-50 dark:bg-slate-800 border border-transparent hover:bg-white hover:border-slate-200 dark:hover:border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-500 cursor-text transition-all duration-200">
                                Search for students, invoices...
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                    </Button>

                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

                    <ThemeToggle />

                    <button className="relative p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>

                    <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>

                    <div className="pl-2 border-l border-slate-200 dark:border-slate-700 ml-2 hidden sm:block">
                        <button className="flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 p-1.5 rounded-lg transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <ChevronDown className="w-3 h-3 text-slate-400" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
