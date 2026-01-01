import React, { useState, useEffect } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import ThemeToggle from '../components/common/ThemeToggle';
import QuickSearch from '../components/common/QuickSearch';

export function Header({ collapsed, setCollapsed }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <QuickSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <header className="h-16 bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800 sticky top-0 z-10 px-4 flex items-center justify-between transition-colors">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-500 dark:text-secondary-400 lg:hidden"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="hidden md:block w-64">
                        <div className="relative" onClick={() => setIsSearchOpen(true)}>
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                            <Input
                                readOnly
                                placeholder="Search... (Ctrl+K)"
                                className="pl-9 bg-secondary-50 dark:bg-secondary-800 border-transparent focus:bg-white dark:focus:bg-secondary-900 focus:border-primary-500 dark:text-secondary-100 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button className="relative p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-500 dark:text-secondary-400 transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-secondary-900"></span>
                    </button>
                    <div className="h-8 w-px bg-secondary-200 mx-1"></div>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">
                        Help
                    </Button>
                </div>
            </header>
        </>
    );
}
