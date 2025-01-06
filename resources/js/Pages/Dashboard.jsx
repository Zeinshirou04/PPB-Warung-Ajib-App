import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from '@/Components/Elements/Sidebar';

export default function Dashboard({ username }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}
