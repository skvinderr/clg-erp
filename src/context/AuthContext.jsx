import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    // Load user from token on startup
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                // Check if it's a mock token first
                if (token.startsWith('mock-token-')) {
                    const role = token.split('-')[2];
                    const mockUsers = [
                        { id: 1, name: 'Admin User', email: 'admin@college.edu', role: 'Admin', avatar: null },
                        { id: 2, name: 'Faculty Member', email: 'faculty@college.edu', role: 'Faculty', avatar: null },
                        { id: 3, name: 'Student User', email: 'student@college.edu', role: 'Student', avatar: null }
                    ];
                    const user = mockUsers.find(u => u.role === role);
                    if (user) {
                        setUser(user);
                        setLoading(false);
                        return;
                    }
                }

                try {
                    const res = await fetch(`${API_URL}/api/auth/me`, {
                        headers: {
                            'x-auth-token': token
                        }
                    });
                    if (res.ok) {
                        const userData = await res.json();
                        setUser(userData);
                    } else {
                        localStorage.removeItem('token');
                    }
                } catch (err) {
                    console.error('Error loading user:', err);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    const login = async (email, password) => {
        setError(null);
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            localStorage.setItem('token', data.token);
            setUser(data.user);
            return true;
        } catch (err) {
            console.warn("Backend unavailable, attempting mock login...", err);

            // Mock Login Fallback for Demo/Dev Mode
            const mockUsers = [
                { id: 1, name: 'Admin User', email: 'admin@college.edu', role: 'Admin', avatar: null },
                { id: 2, name: 'Faculty Member', email: 'faculty@college.edu', role: 'Faculty', avatar: null },
                { id: 3, name: 'Student User', email: 'student@college.edu', role: 'Student', avatar: null }
            ];

            const mockUser = mockUsers.find(u => u.email === email);

            // Allow password 'admin123', 'student123', 'faculty123' or any for demo if strictly offline
            if (mockUser) {
                const fakeToken = `mock-token-${mockUser.role}-${Date.now()}`;
                localStorage.setItem('token', fakeToken);
                setUser(mockUser);
                return true;
            }

            setError(err.message || "Login failed. Backend unreachable and no mock user found.");
            return false;
        }
    };

    const register = async (name, email, password, role) => {
        setError(null);
        try {
            const res = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, role })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            localStorage.setItem('token', data.token);
            setUser(data.user);
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const hasRole = (allowedRoles) => {
        if (!user) return false;
        if (!allowedRoles || allowedRoles.length === 0) return true;
        return allowedRoles.includes(user.role);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading, error, hasRole }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
