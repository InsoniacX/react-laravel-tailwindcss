import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard / Articles / Create Articles',
        href: '/admin/articles/create',
    },
];

export default function Create() {
    const { data, setData, errors, post } = useForm({
        title: '',
        content: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('articles.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Create Articles" />
            <div>
                <div className="mx-auto max-w-5xl rounded-lg bg-[0a0a0a] px-6 py-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Create Article</h2>
                        <Link href={route('articles.index')} className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                            Back
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                                    Title
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border border-gray-700 px-4 py-2 shadow-sm focus:ring-blue-500"
                                    type="text"
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    name="title"
                                    placeholder="Enter Articles Title"
                                />
                                {errors.title && <div className="mt-1 text-sm text-red-500">{errors.title}</div>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Content
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border border-gray-700 px-4 py-2 shadow-sm focus:ring-blue-500"
                                    type="text"
                                    id="email"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    name="content"
                                    placeholder="Enter Content"
                                />
                                {errors.content && <div className="mt-1 text-sm text-red-500">{errors.content}</div>}
                            </div>
                            <div className="text-right">
                                <button type="submit" className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                                    Save Articles
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
