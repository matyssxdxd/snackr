import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Index({ auth, matches }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {matches.map((match) => (
                    <Link key={match.id} href={`/matches/${match.id}`}>
                        <div className="flex-col w-fit shadow-xl rounded-xl hover:scale-110 transition-all mt-10">
                            <img className="object-cover w-48 h-48 rounded-t-xl" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
                            <div className="flex bg-white p-4 justify-center rounded-b-xl">
                                <p className="text-black">{match.pet_name}, {match.pet_age}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
