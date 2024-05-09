// Quiz item component
import {Quiz} from "@/types/utility-types";
import React from "react";

export const QuizItem = ({quiz, onTakeQuiz}: { quiz: Quiz, onTakeQuiz: (quiz: Quiz) => void }) => {
    const {name, user, created_at} = quiz;

    const handleTakeQuiz = () => {
        onTakeQuiz(quiz);
    };

    return (
        <div className="border p-4 rounded-md mb-4">
            <div>
                <p className="text-lg font-bold">{name}</p>
                <p><b>Creator:</b> {user.username}</p>
                <p><b>Created Date:</b> { new Date(created_at).toUTCString()}</p>
            </div>
            <button
                onClick={handleTakeQuiz}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600"
            >
                Take Quiz
            </button>
        </div>
    );
};
