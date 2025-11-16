import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { about } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Accordion from '@/components/ui/accordion';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: about().url,
    },
];

export default function About() {
    const accordionItems = [
        {
            id: 1,
            title: 'Section 1',
            content: <p>Content for section 1.</p>,
        },
        {
            id: 2,
            title: 'Section 2',
            content: <p>Content for section 2.</p>,
        },
        {
            id: 3,
            title: 'Section 3',
            content: <p>Content for section 3.</p>,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-semibold mb-4">FAQ - Frequently Asked Questions</h2>
                            <Accordion items={accordionItems} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
