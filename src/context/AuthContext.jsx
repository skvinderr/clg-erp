import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate checking for stored user
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            // Migration: Ensure role exists for legacy data
            if (!parsedUser.role) {
                parsedUser.role = 'Admin'; // Default to Admin for existing dev sessions
                localStorage.setItem('user', JSON.stringify(parsedUser));
            }
            setUser(parsedUser);
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        // Simulate API call
        // Ensure userData has a role, default to 'Student' if not provided for safety
        const userWithRole = { ...userData, role: userData.role || 'Student' };
        setUser(userWithRole);
        localStorage.setItem('user', JSON.stringify(userWithRole));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const hasRole = (allowedRoles) => {
        if (!user) return false;
        if (!allowedRoles || allowedRoles.length === 0) return true;
        return allowedRoles.includes(user.role);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, hasRole }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
