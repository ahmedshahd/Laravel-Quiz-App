import React from 'react';
import RegisterForm from '@/Components/RegisterForm';
import {PageProps} from "@/types";

const Register: React.FC<PageProps> = ({ csrf }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="py-6">
                <h1 className="text-3xl font-bold text-center">Register</h1>
                <RegisterForm csrf={csrf} />
            </div>
        </div>
    );
};

export default Register;
