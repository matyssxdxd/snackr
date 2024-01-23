import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import NavLink from "@/Components/NavLink.jsx";

export default function Welcome({}) {
    return (
        <>
            <Head title="Welcome" />
            <div className='min-h-screen bg-gray-100'>
                <nav className='bg-white border-b border-gray-100'>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex space-x-8 items-center">
                                <NavLink href={route('login')} active={route().current('login')}>
                                    Login
                                </NavLink>
                                <NavLink href={route('register')} active={route().current('register')}>
                                    Register
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

