import Layout from "@/Templates/Layout";
import {PageProps} from "@/types";
import React from "react";
import {Quiz} from "@/types/utility-types";
import {QuizItem} from "@/Components/QuizItem";
import {Pagination} from "@/Components/Pagination";

interface IndexProps extends PageProps {
    quizzes: Quiz[]
    totalPages: number
}

const Index: React.FC<IndexProps> = ({auth, csrf, quizzes, totalPages}) => {
    const handleTakeQuiz = (quiz: Quiz) => {
        window.location.href = `/quiz/${quiz.id}`
    };

    return (
        <Layout csrf={csrf} isLoggedIn={auth.user !== null}>
            <div className='container mx-auto p-4 mt-4 space-y-4'>
                <h1 className="text-2xl font-bold mb-4">Quizzes</h1>
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {quizzes.map((quiz) => (
                        <QuizItem
                            key={quiz.id}
                            quiz={quiz}
                            onTakeQuiz={handleTakeQuiz}
                        />
                    ))}
                </div>
             <Pagination
        totalPages={totalPages}
      />
            </div>
        </Layout>
    );
};

export default Index;
