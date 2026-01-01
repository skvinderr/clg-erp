import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { messMenu } from '../../data/mockData';
import {
    ArrowLeft, Utensils, Star, MessageSquare
} from 'lucide-react';

const MessManagement = () => {
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState('Monday');

    const currentMenu = messMenu.find(m => m.day === selectedDay);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/hostel')}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-secondary-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">Mess Management</h1>
                    <p className="text-secondary-500">Weekly menu and feedback</p>
                </div>
            </div>

            {/* Day Selector */}
            <div className="flex overflow-x-auto pb-2 gap-2">
                {messMenu.map((m) => (
                    <button
                        key={m.day}
                        onClick={() => setSelectedDay(m.day)}
                        className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${selectedDay === m.day
                                ? 'bg-primary-600 text-white shadow-md'
                                : 'bg-white text-secondary-600 border border-secondary-200 hover:border-primary-300'
                            }`}
                    >
                        {m.day}
                    </button>
                ))}
            </div>

            {/* Menu Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                            <Utensils className="text-primary-500" />
                            Menu for {selectedDay}
                        </h2>

                        <div className="space-y-6">
                            {[
                                { label: 'Breakfast', time: '7:30 AM - 9:00 AM', items: currentMenu?.breakfast },
                                { label: 'Lunch', time: '12:30 PM - 2:00 PM', items: currentMenu?.lunch },
                                { label: 'Snacks', time: '4:30 PM - 5:30 PM', items: currentMenu?.snack },
                                { label: 'Dinner', time: '7:30 PM - 9:00 PM', items: currentMenu?.dinner },
                            ].map((meal) => (
                                <div key={meal.label} className="flex gap-4 pb-6 border-b border-secondary-100 last:border-0 last:pb-0">
                                    <div className="w-24 flex-shrink-0">
                                        <p className="font-bold text-secondary-800">{meal.label}</p>
                                        <p className="text-xs text-secondary-500">{meal.time}</p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-secondary-700 font-medium">{meal.items}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feedback Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h2 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <Star className="text-yellow-500" />
                            Rate Today's Food
                        </h2>
                        <div className="flex gap-2 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button key={star} className="p-2 hover:bg-yellow-50 rounded-full transition-colors group">
                                    <Star size={32} className="text-secondary-300 group-hover:text-yellow-400" />
                                </button>
                            ))}
                        </div>

                        <h3 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                            <MessageSquare className="text-blue-500" />
                            Suggestions / Complaints
                        </h3>
                        <textarea
                            placeholder="Tell us about the food quality, hygiene, etc..."
                            className="w-full p-4 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 h-32 resize-none"
                        ></textarea>
                        <button className="mt-4 btn-primary w-full">Submit Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessManagement;
