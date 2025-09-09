import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Create({ user }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard / Users / Edit / ' + user.name,
            href: '/admin/users/{user}/edit',
        },
    ];
    interface UserFormData {
        name: string;
        email: string;
        password: string;
    }

    const { data, setData, errors, put } = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        put(route('users.update', user.id));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Users" />
            <div>
                <div className="mx-auto max-w-5xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Create User</h2>
                        <Link href={route('users.index')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                            Back
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                    Name
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border border-gray-700 px-4 py-2 shadow-sm focus:ring-blue-500"
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    name="name"
                                    placeholder={user.name}
                                />
                                {errors.name && <div className="mt-1 text-sm text-red-500">{errors.name}</div>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border border-gray-700 px-4 py-2 shadow-sm focus:ring-blue-500"
                                    type="text"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    name="email"
                                    placeholder={user.email}
                                />
                                {errors.name && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                    Password
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border border-gray-700 px-4 py-2 shadow-sm focus:ring-blue-500"
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    name="password"
                                    placeholder={user.password}
                                />
                                {errors.name && <div className="mt-1 text-sm text-red-500">{errors.password}</div>}
                            </div>
                            <div className="text-right">
                                <button type="submit" className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                                    Save User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
