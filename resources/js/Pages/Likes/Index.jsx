import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
export default function Index({ auth, users }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        liked_user_id: '',
    });

    const [user, setUser] = useState(null);
    const [updatedUsers, setUpdatedUsers] = useState([]);

    const handleRandomUserSelection = (usersArray) => {
        if (usersArray.length === 0) {
            setUser(null);
            return;
        }

        const randomIndex = Math.floor(Math.random() * usersArray.length);
        const selected = usersArray[randomIndex];

        setUpdatedUsers([...usersArray.slice(0, randomIndex), ...usersArray.slice(randomIndex + 1)]);
        setUser(selected);
    };

    useEffect(() => {
        if (user) {
            setData({ liked_user_id: user.id });
        }
    }, [user]);

    useEffect(() => {
        handleRandomUserSelection(users);
    }, []);

    const handleLike = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('likes.store'));
        handleRandomUserSelection(updatedUsers);
    };

    const handleDislike = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('dislikes.store'));
        handleRandomUserSelection(updatedUsers);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>}
        >
            <div className='flex justify-center mt-20'>
                {user ? (
                    <div key={user.id} className='max-w-96 h-flex-col shadow-xl rounded-xl'>
                        <img className='rounded-t-xl w-96 object-cover' style={{height: '30rem'}}
                             src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
                             alt="pet picture"/>
                        <div className="bg-white rounded-b-xl p-4">
                            <p className='text-xl font-bold'>{user.pet_name}, {user.pet_age}</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae pulvinar eros. Sed id scelerisque orci, imperdiet venenatis massa. is convallis aliquet leo, non luctus urna accumsan ac.</p>
                            <div className='flex justify-evenly mt-4'>
                                <form onSubmit={handleDislike}>
                                    <button className='bg-gray-100 hover:bg-red-200 p-4 rounded-full transition-all'>
                                        <svg className="w-8 h-8 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                        </svg>
                                    </button>
                                </form>
                                <form onSubmit={handleLike}>
                                    <button className='bg-gray-100 hover:bg-green-200 p-4 rounded-full transition-all'>
                                        <svg className="w-8 h-8 text-green-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>No user</div>
                )}
            </div>
        </AuthenticatedLayout>
    )
        ;
}


