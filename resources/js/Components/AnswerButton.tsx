import React from "react";

interface AnswerButtonProps {
    isSelected: boolean;
    answer: string;
    onSelect: () => void;
    isSubmitted: boolean;
    isCorrect: boolean;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
                                                              isCorrect,
                                                              isSubmitted,
                                                              isSelected,
                                                              answer,
                                                              onSelect
                                                          }) => {
    const defaultButtonStyle = "border-2 min-w-16 p-1 rounded-lg text-gray-700 hover:bg-gray-400";
    const selectedStyle = "bg-gray-600 text-white";
    const correctStyle = "bg-green-500 text-white";
    const incorrectStyle = "bg-red-500 text-white";
    const submittedStyle = "cursor-default bg-gray-500 text-white";
    let classStyle = defaultButtonStyle;
    if(isCorrect&&isSubmitted)
        classStyle += " " + correctStyle;

    if(isSelected&&!isCorrect&&isSubmitted)
        classStyle += " " + incorrectStyle;

    if(!isSubmitted&&isSelected) {
        classStyle += " " + selectedStyle;
    }
    if(isSubmitted){
        classStyle += " " + submittedStyle;
    //     remove all hover styles
        classStyle = classStyle.replace("hover:bg-gray-400", "");
    }

    return (
        <button
            disabled={isSubmitted}
            className={classStyle}
            onClick={onSelect}
        >
            {answer}
        </button>
    );
    }
