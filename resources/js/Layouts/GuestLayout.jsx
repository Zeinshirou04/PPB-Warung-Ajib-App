function GuestLayout({children}) {
    return (
        <main className="w-screen h-screen bg-slate-300 flex justify-center items-center">
            {children}
        </main>
    );
}

export default GuestLayout;