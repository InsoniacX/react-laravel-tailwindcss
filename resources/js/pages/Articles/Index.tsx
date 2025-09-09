import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: 'admin/articles',
    },
];

export default function Index({ articles }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Articles List" />
            <div>
                <div className="mx-auto max-w-7xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Articles List</h2>
                        <Link href={route('articles.create')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                            + Create Articles
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-900">
                            <thead className="bg-gray-950">
                                <tr>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">ID</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">Title</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">Content</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-black">
                                {articles.map(({ id, title, content }) => (
                                    <tr key={id}>
                                        <td className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">{id}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">{title}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">{content}</td>
                                        <td className="flex justify-around space-x-2 px-6 py-4 text-right whitespace-nowrap">
                                            <Link
                                                href={route('users.edit', id)}
                                                className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                                            >
                                                Edit
                                            </Link>
                                            <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">Delete</button>
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
