import React from "react";
import {QuestionItem} from "@/Components/QuestionItem";

interface TakeQuizProps {
    questions: Array<{
        question: string;
        ans1: string;
        ans2: string;
        ans3: string;
        ans4: string;
    }>;
    handleSelectAnswer: (index: number, answer: number) => void;
    isSubmitted: boolean;
    selectedAnswer: number[];
    correctAnswer: number[];

}
const TakeQuiz: React.FC<TakeQuizProps> = ({
                                                      questions,
                                                      handleSelectAnswer,
                                                      isSubmitted,
                                                      selectedAnswer,
                                                      correctAnswer
                                                  }) => {
    return (
        <div className="space-y-6">
            {questions.map((question, index) => (
                <QuestionItem
                    index={index} correctAnswer={correctAnswer[index]} isSubmitted={isSubmitted}
                    selectedAnswer={selectedAnswer[index]} question={question} key={index}
                    onSelectAnswer={handleSelectAnswer.bind(null, index)}
                />
            ))}
        </div>
    )
}

export default TakeQuiz;
