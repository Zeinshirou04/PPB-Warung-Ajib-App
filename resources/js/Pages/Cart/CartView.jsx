import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import LabeledInput from "@/Components/Elements/Input/LabeledInput";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

function CartView({ uid }) {

    const [carts, setCarts] = useState([]);

    const fetchCart = async () => {
        try {
            const response = await axios.get(route('cart.items.show', {
                id: uid
            }));
            const result = response.data['items'];
            setCarts(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCart();
    }, [])

    const CartItems = carts.map((c, index) => {
        const createdAt = new Date(c['created_at']).toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });;
        const updatedAt = new Date(c['updated_at']).toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });;

        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{c['cid']}</td>
                <td>{c['users']['username']}</td>
                <td>{c['menus']['nama_menu']}</td>
                <td>{c['menus']['harga']}</td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
            </tr>
        );
    })

    return (
        <AuthenticatedLayout>
            <div className="grid grid-cols-8 gap-4 h-full px-8 py-12">
                <div className="col-span-6 p-4 flex flex-col gap-4">
                    <header className="font-bold text-2xl">
                        <h4>List Pesanan</h4>
                    </header>
                    <div className="w-full max-h-full overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID Pesanan</th>
                                    <th>Pemesan</th>
                                    <th>Nama Menu</th>
                                    <th>Harga</th>
                                    <th>Tanggal Dibuat</th>
                                    <th>Tanggal Diupdate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CartItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default CartView;