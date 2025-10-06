import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Show({ role, permissions }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard / Role / ' + role.name,
            href: '/admin/Roles/{role.name}',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Roles Show" />
            <div>
                <div className="mx-auto max-w-5xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Create User</h2>
                        <Link href={route('roles.index')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                            Back
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto">
                            <p className="my-4 text-2xl">
                                <strong>Name: </strong>
                                {role.name}
                            </p>
                            <p className="text-2xl">
                                <strong>Permissions: </strong>
                            </p>
                            {permissions.map((permission) => (
                                <span key={permission.id} className="mr-1 rounded bg-green-100 p-1 text-center text-xs font-medium text-green-800">
                                    {permission}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
