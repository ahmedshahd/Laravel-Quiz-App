import FormInput from "@/Components/FormInput";
import React from "react";

const AnswerForm = ({answer, onChange,number}: {answer: string, onChange: (value: string, id: number) => void, number: number}) => {
    return (
        <div className="flex mb-2">
            <FormInput
                placeholder="Answer"
                id={`ans${number}`}
                label={`Answer ${number}`}
                type="text"
                value={answer}
                onChange={(value) => onChange(value, number)}
            />
        </div>
    );
};

export default AnswerForm;
