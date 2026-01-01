import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-6">
            <Link to="/dashboard" className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                <Home size={16} />
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

                return (
                    <React.Fragment key={to}>
                        <ChevronRight size={16} className="mx-2 text-secondary-400" />
                        {isLast ? (
                            <span className="font-medium text-secondary-900 dark:text-secondary-100">
                                {label}
                            </span>
                        ) : (
                            <Link to={to} className="hover:text-primary-600 dark:hover:text-primary-400">
                                {label}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
