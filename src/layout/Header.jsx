import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Header({ collapsed, setCollapsed }) {
    return (
        <header className="h-16 bg-white border-b border-secondary-200 sticky top-0 z-10 px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-500 lg:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="hidden md:block w-64">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                        <Input
                            placeholder="Search..."
                            className="pl-9 bg-secondary-50 border-transparent focus:bg-white focus:border-primary-500"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="relative p-2 rounded-full hover:bg-secondary-100 text-secondary-500 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-8 w-px bg-secondary-200 mx-1"></div>
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                    Help
                </Button>
            </div>
        </header>
    );
}
