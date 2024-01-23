import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset, progress } = useForm({
        username: '',
        pet_name: '',
        pet_age: '',
        email: '',
        password: '',
        password_confirmation: '',
        picture: '',
    });

    const handleFile = (e) => {
        if (e.currentTarget.files) {
            setData("picture", e.currentTarget.files[0]);
        }
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="username" value="Username"/>

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="pet_name" value="Pet name"/>

                    <TextInput
                        id="pet_name"
                        name="pet_name"
                        value={data.pet_name}
                        className="mt-1 block w-full"
                        autoComplete="pet_name"
                        isFocused={true}
                        onChange={(e) => setData('pet_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.pet_name} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="pet_age" value="Pet age"/>

                    <input
                        id="pet_age"
                        name="pet_age"
                        type="number"
                        value={data.pet_age}
                        className="mt-1 block w-full border-pink-300 focus:border-pink-500 focus:ring-pink-500 rounded-md shadow-sm"
                        autoComplete="pet_age"
                        onChange={(e) => setData('pet_age', e.target.value)}
                        required
                    />

                    <InputError message={errors.pet_age} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel input={"picture"} value={"Picture"} required={true} />
                        <input
                            type="file"
                            name="picture"
                            required={true}
                            className="mt-1 mb-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 rounded-md shadow-sm "
                            onChange={handleFile}
                        />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email"/>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password"/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password"/>

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2"/>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
