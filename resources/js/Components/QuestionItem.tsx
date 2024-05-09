import {AnswerRow} from "@/Components/AnswerRow";
import React from "react";

interface QuestionItemProps {
    isSubmitted: boolean,
    selectedAnswer: number,
    question: any;
    index: number;
    onSelectAnswer: (num: number) => void;
    correctAnswer: number
}
export const QuestionItem: React.FC<QuestionItemProps> = ({correctAnswer,isSubmitted,selectedAnswer, question, index, onSelectAnswer}) => {
    return (
        <div className="border p-4 rounded-md mb-4">
            <h3>Question {index + 1}</h3>
            <p className="text-lg font-bold ml-1">{question.question}</p>
            <AnswerRow selectedAnswer={selectedAnswer}
                       correctAnswer={correctAnswer-1}
                       answers={[question.ans1, question.ans2, question.ans3, question.ans4]}
                       onSelectAnswer={onSelectAnswer}
                       isSubmitted={isSubmitted}
            />
        </div>
    );
};
