import FormInput from "@/Components/FormInput";
import React from "react";
import AnswerForm from "@/Components/AnswerForm";

const QuestionForm = ({question, onChange, onDelete}: any) => {
    const handleAnswerChange = (value: string, answerId: number) => {
        onChange({...question, [`ans${answerId}`]: value});
    };


    return (
        <div className="border p-4 rounded-md mb-4">
            <FormInput
                placeholder="Question"
                id={`question-${question.id}`}
                label={`Question ${question.id}`}
                type="text"
                value={question.question}
                onChange={(value) => onChange({...question, question: value})}
            />
            <div className="flex flex-wrap w-full gap-2 mt-2 justify-between">
                <div className="flex flex-wrap w-full sm:w-1/2 justify-between">
                    <AnswerForm
                        answer={question.ans1}
                        onChange={handleAnswerChange}
                        number={1}
                    />
                    <AnswerForm
                        answer={question.ans2}
                        onChange={handleAnswerChange}
                        number={2}
                    />
                </div>
                <div className="flex flex-wrap w-full sm:w-1/2 justify-between">
                    <AnswerForm
                        answer={question.ans3}
                        onChange={handleAnswerChange}
                        number={3}
                    />
                    <AnswerForm
                        answer={question.ans4}
                        onChange={handleAnswerChange}
                        number={4}
                    />
                </div>
            </div>
            <div className={"flex mb-6 flex-col"}>
                <label htmlFor="correct_answer" className="block text-gray-700">Correct Answer</label>
                <select value={question.correct_answer} className="mt-1 p-2 w-48 border rounded-md"
                        id="correct_answer"
                        name={'correct_answer'}
                        onChange={(e) =>
                            onChange({...question, correct_answer: e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

            </div>
            <button
                type="button"
                className="bg-red-500 text-white py-1 px-2 rounded-md mt-2 hover:bg-red-600"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default QuestionForm;
