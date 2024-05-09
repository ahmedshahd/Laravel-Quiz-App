import React from "react";

interface Props {
    prevScore: number;
    otherScores: { score: number, username: string,created_at: string }[];
}

const PreviouslyTookQuiz: React.FC<Props> = ({prevScore,otherScores}) => {

    return (
        //  that displays that user previously took quiz his previous score and other users scores
        <div className="mt-4 bg-gray-100 p-4 rounded shadow space-y-4 text-gray-800 min-h-[400px]">
            <div className="bg-gray-200 p-4 rounded tx-lg">You Previously Scored {prevScore}</div>
        </div>
    )
}

export default PreviouslyTookQuiz;
