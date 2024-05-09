import React from 'react';
import {LoginForm} from "@/Components/LoginForm";

const Login = ({Auth,csrf}: { Auth: any,csrf: string }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="py-6">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <LoginForm csrf={csrf}/>
            </div>
        </div>
    );
};

export default Login;
