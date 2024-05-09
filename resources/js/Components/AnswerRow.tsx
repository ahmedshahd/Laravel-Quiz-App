import {AnswerButton} from "@/Components/AnswerButton";
import React from "react";

interface AnswerRowProps {
    selectedAnswer: number,
    answers: string[];
    onSelectAnswer: (num: number) => void;
    isSubmitted: boolean;
    correctAnswer: number
}
export const AnswerRow:React.FC<AnswerRowProps> = ({correctAnswer,isSubmitted,selectedAnswer, answers, onSelectAnswer}) => {
    return (
        <div className="flex flex-row items-center mt-4 flex-wrap gap-4">
            {answers.map((answer, index) => (
                <AnswerButton isCorrect={index===correctAnswer} isSubmitted={isSubmitted} isSelected={index + 1 === selectedAnswer} key={index} answer={answer}
                              onSelect={onSelectAnswer.bind(null, index + 1)}/>
            ))}
        </div>
    );
};
