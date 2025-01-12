import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import LabeledInput from "@/Components/Elements/Input/LabeledInput";
import axios from "axios";
import { useEffect, useState } from "react";

const menus = {
    'mid': '',
    'gambar': null,
    'nama_menu': '',
    'deskripsi': '',
    'harga': 0,
};

function MenuView() {
    const { data, setData, post, progress } = useForm(menus);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(route('dashboard.menu.all'));
            setItems(response.data.items);
        }
        fetchData();
    }, []);

    const MenuItems = items != [] && items.map((item, index) => {
        return (
            <tr className="text-center">
                <td>{++index}</td>
                <td>{item['mid']}</td>
                <td>
                    <div className="w-24 h-24 mx-auto">
                        <img src={`/${item['gambar']}`} alt="" />
                    </div>
                </td>
                <td>{item['nama_menu']}</td>
                <td>{item['deskripsi']}</td>
                <td>{item['harga']}</td>
            </tr>
        )
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.menu.store'));
    }

    return (
        <AuthenticatedLayout>
            <div className="grid grid-cols-8 gap-4 h-full px-8 py-12">
                <div className="col-span-6 p-4 flex flex-col gap-4">
                    <header className="font-bold text-2xl">
                        <h4>List Menu</h4>
                    </header>
                    <div className="w-full max-h-full overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID Menu</th>
                                    <th>Gambar Menu</th>
                                    <th>Nama Menu</th>
                                    <th>Deskripsi Menu</th>
                                    <th>Harga Menu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MenuItems}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-2 p-4 flex flex-col gap-4">
                    <header className="font-bold text-2xl">
                        <h4>Tambah/Edit Menu</h4>
                    </header>
                    <form onSubmit={onFormSubmit} className="w-full flex flex-col gap-3">
                        <LabeledInput type="text" name="mid" id="mid" placeholder="Masukkan ID Menu" className="rounded-md " data={data} setData={setData} label="ID Menu" />
                        <LabeledInput type="file" name="gambar" id="gambar" placeholder="Masukkan Gambar Menu" data={data} setData={setData} label="Gambar Menu" />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <LabeledInput type="text" name="nama_menu" id="nama_menu" placeholder="Masukkan Nama Menu" className="rounded-md " data={data} setData={setData} label="Nama Menu" />
                        <LabeledInput type="text" name="deskripsi" id="deskripsi" placeholder="Masukkan Deskripsi Menu" className="rounded-md " data={data} setData={setData} label="Deskripsi Menu" />
                        <LabeledInput type="number" name="harga" id="harga" placeholder="Masukkan Harga Menu" className="rounded-md " data={data} setData={setData} label="Harga Menu" />
                        <input type="submit" className="bg-blue-500 py-2 rounded-md text-white hover:bg-blue-600/80 active:bg-blue-600 focus:bg-blue-600/80" value="Tambah Menu" />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default MenuView;