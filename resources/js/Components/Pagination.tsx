// Pagination component
import React from "react";

export const Pagination = ({totalPages}: {totalPages: number}) => {
    const currentPage: number = parseInt(
        window.location.pathname.split("/")[2]
    );

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <div className="flex justify-center items-center space-x-2 mt-4">
            <a
                href={`/quizzes/${Math.max(1, currentPage - 1)}`}
                className={`px-3 py-1 rounded-md ${
                    currentPage === 1 ? "bg-gray-300 text-gray-700 cursor-not-allowed hidden" : "bg-gray-800 text-white"
                }`}
            >
                {"<"}
            </a>

            {generatePageNumbers().map((page) => (
                <a
                    key={page}
                    href={`/quizzes/${page}`}
                    className={`px-3 py-1 rounded-md ${
                        currentPage === page ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                    }`}
                >
                    {page}
                </a>
            ))}

            <a
                href={`/quizzes/${Math.min(totalPages, currentPage + 1)}`}
                className={`px-3 py-1 rounded-md ${
                    currentPage === totalPages ? "bg-gray-300 text-gray-700 cursor-not-allowed hidden" : "bg-gray-800" +
                        " text-white"
                }`}
            >
                {">"}
            </a>
        </div>
    );
};
