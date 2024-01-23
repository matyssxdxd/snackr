import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-pink-400 text-pink-700 bg-pink-50 focus:text-pink-800 focus:bg-pink-100 focus:border-pink-700'
                    : 'border-transparent text-pink-600 hover:text-pink-800 hover:bg-pink-50 hover:border-pink-300 focus:text-pink-800 focus:bg-pink-50 focus:border-pink-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
