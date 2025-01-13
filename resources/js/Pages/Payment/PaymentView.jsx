import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import LabeledInput from "@/Components/Elements/Input/LabeledInput";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

function PaymentView({ uid }) {

    const [payments, setPayments] = useState([]);

    const fetchPayments = async () => {
        try {
            const response = await axios.get(route('images.show'));
            const result = response.data['items'];
            setPayments(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPayments();
    }, [])

    const PaymentItems = payments.map((p, index) => {
        const createdAt = new Date(p['created_at']).toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });;
        const updatedAt = new Date(p['updated_at']).toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });;

        return (
            <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{p['id']}</td>
                <td>{p['users']['username']}</td>
                <td>
                    <div className="w-24 h-24 mx-auto">
                        <img src={`/${p['gambar']}`} alt="" />
                    </div>
                </td>
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
                        <h4>List Pembayaran</h4>
                    </header>
                    <div className="w-full max-h-full overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID Pembayaran</th>
                                    <th>Pelanggan</th>
                                    <th>Bukti Pembayaran</th>
                                    <th>Tanggal Dibuat</th>
                                    <th>Tanggal Diupdate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PaymentItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PaymentView;