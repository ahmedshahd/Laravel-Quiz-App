import React, {useState} from "react";
import {PageProps} from "@/types";
import Layout from "@/Templates/Layout";
import QuizHeader from "@/Components/QuizHeader";
import TakeQuiz from "@/Components/TakeQuiz";
import PreviouslyTookQuiz from "@/Components/PreviouslyTookQuiz";


interface ShowProps extends PageProps {
    quiz: {
        name: string;
        created_at: string;
        user: {
            username: string;
            id: number;
        };
        questions: Array<{
            question: string;
            ans1: string;
            ans2: string;
            ans3: string;
            ans4: string;
        }>;
        id: number;
    };
    prevScore: number|null;
}

const Show: React.FC<ShowProps> = ({scores,prevScore,auth, csrf, quiz}) => {
    const [submitted, setSubmitted] = useState(prevScore !== null);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(() => new Array(quiz.questions.length).fill(-1));
    const [correctAnswers, setCorrectAnswers] = useState<number[]>(() => new Array(quiz.questions.length).fill(-1));
    const [score, setScore] = useState<number>(prevScore || 0);

    const handleRetakeQuiz = () => {
        setSubmitted(false);
        setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
        setCorrectAnswers(new Array(quiz.questions.length).fill(-1));
    }
    const handleSelectAnswer = (index: number, answer: number) => {
        setSelectedAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = updatedAnswers[index] === answer ? -1 : answer;
            return updatedAnswers;
        });
    };

    const submitAnswers = async () => {
        console.log(selectedAnswers);
        const data = await fetch(`/quiz/${quiz.id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                selectedAnswers,
                _token: csrf
            })
        });
        const response = await data.json();
        setCorrectAnswers(response.answers);
        setScore(response.score);
        setSubmitted(true);
    };

    return (
        <Layout csrf={csrf} isLoggedIn={auth.user !== null}>
            <div className="container mx-auto p-4 mt-4 space-y-4">
                <QuizHeader name={quiz.name} username={quiz.user.username} userId={quiz.user.id} created_at={quiz.created_at}/>
                {(prevScore && submitted && selectedAnswers.every(answer=>answer===-1)) ? <PreviouslyTookQuiz prevScore={prevScore} handleRetakeQuiz={handleRetakeQuiz}/> : <div><TakeQuiz questions={quiz.questions}
                                                          handleSelectAnswer={handleSelectAnswer}
                                                          isSubmitted={submitted}
                                                          selectedAnswer={selectedAnswers}
                                                          correctAnswer={correctAnswers}
                />
                    <div className="flex justify-center">
                        {!submitted ? (
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={submitAnswers}
                            >
                                Submit
                            </button>
                        ) : (
                            <div>
                                <div className={(score === quiz.questions.length ?
                                    'text-green-500' : 'text-red-500') + " text-center font-bold py-2 px-4 rounded text-xl"}>You
                                    Scored {score}/{quiz.questions.length}</div>
                                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleRetakeQuiz}>
                                    Retake Quiz
                                </button>
                            </div>
                        )}

                    </div>
                </div>}

            </div>
        </Layout>
    );
};

export default Show;
