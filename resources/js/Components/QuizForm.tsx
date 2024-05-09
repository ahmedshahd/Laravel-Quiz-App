import React from "react";
import QuestionForm from "@/Components/QuestionForm";
import FormInput from "@/Components/FormInput";
import {useForm} from "@inertiajs/react";
import {Question} from "@/types/utility-types";
import exp from "node:constants";

interface QuizFormProps {
    questions: Array<{
        question: string;
        ans1: string;
        ans2: string;
        ans3: string;
        ans4: string;
    }>;
    selectedAnswers: number[];
    handleSelectAnswer: (index: number, answer: number) => void;
    submitAnswers: () => void;
    isSubmitted: boolean;
}

export const QuizForm = ({csrf}: {csrf: string}) => {
    const {data, setData, post, errors}=useForm<{name: string, questions: Question[],_token: string}>({
        name: "Math Quiz",
        questions: [{
            id: 1,
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct_answer: 1,
        }],
        _token: csrf
    });
    const cancelHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    //     redirect to /
        window.location.href = "/";
    }
    const nameChangeHandler = (value: string) => {
        setData("name", value);
    }

    const handleQuestionChange = (updatedQuestion:any) => {
        const updatedQuestions = data.questions.map((q) =>
            q.id === updatedQuestion.id ? updatedQuestion : q
        );
        setData("questions", updatedQuestions);
    };

    const handleQuestionDelete = (questionId: number) => {
        if(data.questions.length === 1) {
            alert('Quiz must have at least one question');
            return;
        }
        const filteredQuestions = data.questions.filter((q) => q.id !== questionId);
        filteredQuestions.forEach((q, index) => {
            q.id = index + 1;
        })
        setData("questions", filteredQuestions);
    };

    const handleAddQuestion = () => {
        const newQuestionId = data.questions.length + 1;
        setData("questions",([
            ...data.questions,
            {
                id: newQuestionId,
                question: "",
                ans1: "",
                ans2: "",
                ans3: "",
                ans4: "",
                correct_answer: 1,
            },
        ]));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/quiz/create");
    }

    return (
        <form action="/quiz" method="POST" onSubmit={submitHandler}>
            <div className="border p-4 rounded-md mb-4">
                <FormInput placeholder="Quiz Title" id="name" label="Quiz Title" type="text" value={data.name}
                           onChange={nameChangeHandler}/>
                {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            {data.questions.map((question) => (
                <QuestionForm
                    key={question.id}
                    question={question}
                    onChange={handleQuestionChange}
                    onDelete={() => handleQuestionDelete(question.id)}
                />
            ))}
            <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600"
                onClick={handleAddQuestion}
            >
                Add Question
            </button>
            <div className="flex flex-row gap-10 mt-4">
                <button typeof={" submit"}
                        className="block bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600">Submit
                </button>
                <button onClick={cancelHandler}
                        className="block bg-gray-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-gray-600">Cancel
                </button>
            </div>
        </form>
    );
};
export default QuizForm
