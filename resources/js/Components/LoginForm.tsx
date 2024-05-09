import React from "react";
import {router, useForm} from "@inertiajs/react";
import FormInput from "@/Components/FormInput";


export const LoginForm = ({csrf}: { csrf: string }) => {
    const {data, setData, post, processing, errors} = useForm({
        username: '',
        password: '',
        remember: false,
    })

    const onSubmit: React.EventHandler<any> = (e) => {
        e.preventDefault()
        if(data.username.trim().length ===0){
            errors.username = 'Username is required';
        }
        if(data.password.trim().length ===0){
            errors.password = 'Password is required';
        }
        if(data.username.trim().length ===0 || data.password.trim().length ===0) {
            setData('password', '');
            setData('username', '');
            return
        }
        router.post('/login',{
            username: data.username,
            password: data.password,
            _token: csrf
        });
    }

    return (
        <form
            action="/login"
            method="POST"
            className="max-w-md mx-auto mt-8"
            onSubmit={onSubmit}
        >
            <FormInput
                id="username"
                label="Username"
                type="text"
                placeholder="Username"
                value={data.username}
                onChange={(value) => setData("username", value)}
                error={errors.username}
            />
            <FormInput
                id="password"
                label="Password"
                placeholder="Password"
                type="password"
                value={data.password}
                onChange={(value) => setData("password", value)}
                error={errors.password}
            />
            <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
                Login
            </button>
        </form>
    );
};
