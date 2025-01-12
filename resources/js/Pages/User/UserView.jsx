import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import LabeledInput from "@/Components/Elements/Input/LabeledInput";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

const User = {
    username: '',
    password: ''
}

function UserView() {

    const { data, setData, post } = useForm(User);

    const [users, setUsers] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await axios.get(route('dashboard.user.all'));
            const result = response.data['users'];
            setUsers(result);
        } catch (error) {
            console.error(errror);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const UserItems = users.map((u, index) => {
        const createdAt = new Date(u['created_at']).toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });;
        const updatedAt = new Date(u['updated_at']).toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });;

        return (
            <tr className="text-center">
                <td>{++index}</td>
                <td>{u['username']}</td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
            </tr>
        );
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('register.store'));
        fetchUser();
    }

    return (
        <AuthenticatedLayout>
            <div className="grid grid-cols-8 gap-4 h-full px-8 py-12">
                <div className="col-span-6 p-4 flex flex-col gap-4">
                    <header className="font-bold text-2xl">
                        <h4>List User</h4>
                    </header>
                    <div className="w-full max-h-full overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>Tanggal Dibuat</th>
                                    <th>Tanggal Diupdate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {UserItems}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-2 p-4 flex flex-col gap-4">
                    <header className="font-bold text-2xl">
                        <h4>Tambah/Edit User</h4>
                    </header>
                    <form onSubmit={onFormSubmit} className="w-full flex flex-col gap-3">
                        <LabeledInput label="Username" name="username" id="username" className="rounded-md" type="text" placeholder="Masukkan Username" data={data} setData={setData} />
                        <LabeledInput label="Password" name="password" id="password" className="rounded-md" type="password" placeholder="Masukkan Password" data={data} setData={setData} />
                        <input type="submit" className="bg-blue-500 py-2 rounded-md text-white hover:bg-blue-600/80 active:bg-blue-600 focus:bg-blue-600/80" value="Tambah User" />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default UserView;