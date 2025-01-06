import { useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import LabeledInput from "@/Components/Elements/Input/LabeledInput";

const loginCredentials = {
    username: '',
    password: ''
}

function LoginForm() {
    const { data, setData, post, processing, errors } = useForm(loginCredentials);
    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('auth.login.store'));
    }
    return (
        <GuestLayout>
            <div className="bg-white p-12 rounded-md">
                <form onSubmit={onFormSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <LabeledInput type="text" name="username" id="username" placeholder="Masukkan Username" className="rounded-md w-64" data={data} setData={setData} label="Username" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <LabeledInput type="password" name="password" id="password" placeholder="Masukkan Password" className="rounded-md w-64" data={data} setData={setData} label="Password" />
                    </div>
                    <input type="submit" value="Masuk" className="bg-green-500 p-2 rounded-md hover:cursor-pointer hover:bg-green-600/90 active:bg-green-600/90 focus:bg-green-600 transition-colors" />
                    {errors.attempt && (<p className="text-red-500 text-center text-md">
                        {errors.attempt}
                    </p>)}
                </form>
            </div>
        </GuestLayout>
    );
}

export default LoginForm;