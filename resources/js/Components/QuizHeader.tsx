import React from "react";

interface QuizHeaderProps {
    name: string;
    username: string;
    userId: number;
    created_at: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({name, username, userId, created_at}) => {
    return <><h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm text-gray-500">
            Creator:{" "}
                {username}
            {" "}| Created Date: {new Date(created_at).toLocaleDateString()}
        </p></>;
}

export default QuizHeader;
