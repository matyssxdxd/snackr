import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Index({ auth, match }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>}
        >
            <div className='flex justify-center mt-20'>
                    <div className='max-w-96 h-flex-col shadow-xl rounded-xl'>
                        <img className='rounded-t-xl w-96 object-cover' style={{height: '30rem'}}
                             src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
                             alt="pet picture"/>
                        <div className="bg-white rounded-b-xl p-4">
                            <p className='text-xl font-bold'>{match.pet_name}, {match.pet_age}</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                vitae pulvinar eros. Sed id scelerisque orci, imperdiet venenatis massa. is convallis
                                aliquet leo, non luctus urna accumsan ac.</p>
                            <p className='text-sm mt-2'>Contact: {match.email}</p>
                            <Link href="/matches">
                                <div className="flex mt-4 p-4 bg-gray-200 justify-center rounded-full hover:bg-pink-400 transition-all">
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}
