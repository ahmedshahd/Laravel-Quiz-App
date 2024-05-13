import React from "react";

interface Props {
    prevScore: number;
    handleRetakeQuiz: () => void;
}

const PreviouslyTookQuiz: React.FC<Props> = ({prevScore,handleRetakeQuiz}) => {
    return (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow space-y-4 text-gray-800 min-h-[400px]">
            <div className="bg-gray-200 p-4 rounded tx-lg">You Previously Scored {prevScore}</div>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRetakeQuiz}>Retake Quiz</button>
        </div>
    )
}

export default PreviouslyTookQuiz;
