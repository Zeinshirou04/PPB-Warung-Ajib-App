import Sidebar from "@/Components/Elements/Sidebar";

export default function AuthenticatedLayout({ children }) {
    return (
        <main className='w-svw h-svh bg-slate-300 flex gap-4'>
            <div className='py-12 px-24 w-full h-full'>
                <div className='w-full h-full bg-white rounded-md flex gap-2 shadow-md'>
                    <Sidebar />
                    <div className="w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
