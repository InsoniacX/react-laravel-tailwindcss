import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard / Roles',
        href: '/admin/roles',
    },
];

export default function Index({ roles }) {
    function handleDelete($id) {
        if (confirm('Are you sure you want to delete this user?')) {
            // Perform delete action, e.g., send a request to the server
            console.log('Roles with ID ' + $id + ' deleted.');
            router.delete(route('roles.destroy', $id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Role List" />
            <div>
                <div className="mx-auto max-w-5xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Role List</h2>
                        <Link href={route('roles.create')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                            + Create Role
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-900">
                            <thead className="bg-gray-950">
                                <tr>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">ID</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">Permissions</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-black">
                                {roles.map(({ id, name, permissions }) => (
                                    <tr key={id}>
                                        <td className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">{id}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">{name}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            {permissions.map((permission) => (
                                                <span
                                                    key={permission.id}
                                                    className="mr-1 rounded bg-green-100 p-1 text-center text-xs font-medium text-green-800"
                                                >
                                                    {permission.name}
                                                </span>
                                            ))}
                                        </td>
                                        <td className="flex justify-around space-x-2 px-6 py-4 text-right whitespace-nowrap">
                                            <Link
                                                href={route('roles.show', id)}
                                                className="rounded bg-gray-700 px-3 py-1 text-white hover:bg-green-600"
                                            >
                                                Details
                                            </Link>
                                            <Link
                                                href={route('roles.edit', id)}
                                                className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(id)}
                                                className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
