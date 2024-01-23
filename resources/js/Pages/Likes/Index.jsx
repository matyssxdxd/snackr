import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia-react';

export default function Index({ auth, user }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        liked_user_id: user ? user.id : null
    });

    const [loading, setLoading] = useState(false);

    const handleLike = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await post(route('likes.store'));
            Inertia.reload(); // Manually reload the page
        } finally {
            setLoading(false);
        }
    }


    const handleDislike = (e) => {
        e.preventDefault();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>}
        >
            <div className='flex justify-center'>
                {loading ? (
                    <p>Loading...</p>
                ) : user ? (
                    <div key={user.id} className='bg-white p-4'>
                        <div className='bg-gray-300 h-80 w-60'>

                        </div>
                        <p>{user.name}, age</p>
                        <p>Description</p>
                        <div className='flex justify-evenly'>
                            <form onSubmit={handleDislike}>
                                <button className='bg-gray-200 p-4 rounded-full'>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-red-600" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                                    </svg>
                                </button>
                            </form>
                            <form onSubmit={handleLike}>
                                <button className='bg-gray-200 p-4 rounded-full'>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-green-700" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path
                                            d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                ) : <div>No user</div>}
            </div>
        </AuthenticatedLayout>
    );
}
