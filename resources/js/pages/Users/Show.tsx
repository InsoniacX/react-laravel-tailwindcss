import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Show({ user }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard / Users / ' + user.name,
            href: '/admin/users/{user}',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | User Show" />
            <div>
                <div className="mx-auto max-w-5xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Create User</h2>
                        <Link href={route('users.index')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                            Back
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto">
                            <div className="flex items-center justify-center">
                                <img src={user.image} alt="" />
                            </div>
                            <img src={user.image} alt="ProfilePicture" />
                            <p className="my-4 text-2xl">
                                <strong>Name: </strong>
                                {user.name}
                            </p>
                            <p className="text-2xl">
                                <strong>Email: </strong>
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
