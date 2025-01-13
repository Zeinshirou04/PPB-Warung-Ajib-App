const Sidebar = () => {
    return (
        <aside className="w-80 h-full bg-slate-400 rounded-md shadow-md px-8 py-12">
            <div className="w-full flex flex-col gap-4">
                <header className="w-full text-center p-4">
                    <h3 className="font-bold text-4xl text-white">WARUNG AJIB</h3>
                </header>
                <div className="w-full text-center p-4 flex flex-col gap-4">
                    <a className="w-full" href={route('dashboard.home.menu')}>
                        <p className="text-white text-xl hover:text-gray-200/90 active:text-gray-200/90 focus:text-gray-200">List Menu</p>
                    </a>
                    <a className="w-full" href={route('dashboard.home.user')}>
                        <p className="text-white text-xl hover:text-gray-200/90 active:text-gray-200/90 focus:text-gray-200">List Users</p>
                    </a>
                    <a className="w-full" href={route('dashboard.home.cart')}>
                        <p className="text-white text-xl hover:text-gray-200/90 active:text-gray-200/90 focus:text-gray-200">List Pembelian</p>
                    </a>
                    <a className="w-full" href={route('dashboard.home.payment')}>
                        <p className="text-white text-xl hover:text-gray-200/90 active:text-gray-200/90 focus:text-gray-200">List Pembayaran</p>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;