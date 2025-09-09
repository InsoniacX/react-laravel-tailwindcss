import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard / Roles / Create Roles',
        href: '/admin/roles/create',
    },
];

export default function Create({ permissions }) {
    const { data, setData, errors, post } = useForm({
        name: '',
        permissions: [],
    });

    function handleCheckboxChange(permissionName, checked) {
        if (checked) {
            setData('permissions', [...data.permissions, permissionName]);
        } else {
            setData(
                'permissions',
                data.permissions.filter((p) => p !== permissionName),
            );
        }
    }

    function submit(e) {
        e.preventDefault();
        post(route('roles.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Roles Create" />
            <div>
                <div className="mx-auto max-w-5xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Create Roles</h2>
                        <Link href={route('roles.index')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
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
                                    onChange={(e) => handleCheckboxChange('name', e.target.value)}
                                    name="name"
                                    placeholder="Enter Name"
                                />
                                {errors.name && <div className="mt-1 text-sm text-red-500">{errors.name}</div>}
                                <label htmlFor="permissions" className="block text-sm font-medium text-gray-300">
                                    Permissions
                                </label>

                                {permissions.map((permission) => (
                                    <label key={permission} className="flex items-center space-x-2">
                                        <input
                                            id={permission}
                                            onChange={(e) => handleCheckboxChange(permission, e.target.checked)}
                                            type="checkbox"
                                            value={permission}
                                            className="form-checkbox rounded text-blue-600 focus:ring-2"
                                        />
                                        <span className="text-gray-700">{permission}</span>
                                    </label>
                                ))}
                                {errors.permissions && <div className="mt-1 text-sm text-red-500">{errors.permissions}</div>}
                            </div>
                            <div className="text-right">
                                <button type="submit" className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                                    Save Roles
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
