import React from "react";
import {router, useForm} from "@inertiajs/react";
import FormInput from "@/Components/FormInput";

const RegisterForm: React.FC<{ csrf: string}> = ({ csrf }) => {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit: React.EventHandler<React.FormEvent> = (event) => {
        event.preventDefault();

        if (data.username.trim().length === 0) {
            errors.username = "Name is required";
        }
        if (data.email.trim().length === 0) {
            errors.email = "Email is required";
        }
        if (data.password.trim().length === 0) {
            errors.password = "Password is required";
        }
        if (data.password_confirmation.trim().length === 0||data.password.trim()!==data.password_confirmation.trim()) {
            errors.password_confirmation = "Confirm Password is required and must match password";
        }
        if (
            data.username.trim().length === 0 ||
            data.email.trim().length === 0 ||
            data.password.trim().length === 0 ||
            data.password_confirmation.trim().length === 0
        ) {
            return;
        }

        router.post("/register", {
            _token: csrf,
            ...data,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <FormInput
                id="username"
                placeholder="Username"
                label="username"
                value={data.username}
                onChange={(value) => setData("username", value)}
                error={errors.username}
            />
            <FormInput
                id="email"
                placeholder="Email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(value) => setData("email", value)}
                error={errors.email}
            />
            <FormInput
                id="password"
                placeholder="Password"
                label="Password"
                type="password"
                value={data.password}
                onChange={(value) => setData("password", value)}
                error={errors.password}
            />
            <FormInput
                id="password_confirmation"
                placeholder="Confirm Password"
                label="Confirm Password"
                type="password"
                value={data.password_confirmation}
                onChange={(value) => setData("password_confirmation", value)}
                error={errors.password_confirmation}
            />
            <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
                Register
            </button>
        </form>
    );

};

export default RegisterForm;
