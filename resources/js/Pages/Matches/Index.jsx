import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth, matches }) {
    console.log(matches);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>}
        >
            <div>
                {matches.map((match) => (
                    <div key={match.id} className="flex justify-center">
                        <div className="h-96 w-auto">
                            <img className="h-48 w-48 object-cover" src={match.picture}/>
                        </div>
                        <p className="text-black">{match.pet_name}</p>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
