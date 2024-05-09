import React from "react";
import {PageProps} from "@/types";
import {QuizForm} from "@/Components/QuizForm";
import Layout from "@/Templates/Layout";

const Create:React.FC<PageProps> = ({ csrf, auth}) => {

    return (
        <Layout csrf={csrf} isLoggedIn={auth.user !== null}>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center w-[calc(70%)] mx-auto my-4 rounded-md py-10 px-6 sm:px-12">
            <div className="py-6">
                <h1 className="text-3xl font-bold text-center">Create Quiz</h1>
                <QuizForm csrf={csrf}/>
            </div>
        </div>
        </Layout>
    );
};

export default Create;
