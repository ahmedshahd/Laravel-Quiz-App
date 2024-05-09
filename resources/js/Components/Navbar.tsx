import React from 'react';



const Navbar: React.FC<{isLoggedIn: boolean, csrf: string}> = ({isLoggedIn, csrf}) => {
    const currentPage = window.location.pathname.split('/');
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="/" className="text-white text-2xl font-bold">Quiz App</a>
                    </div>
                    <div className="flex items-center">
                        {isLoggedIn ? (
                            <>
                                <a href="/quiz/create"
                                   className={`${currentPage[1] === 'quiz' && currentPage[2] === 'create' ? 'bg-gray-900' : 'hover:bg-gray-700'} text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}>Create
                                    Quiz</a>
                                <a href="/quizzes/1"
                                   className={`${currentPage[1] === 'quizzes' ? 'bg-gray-900' : 'hover:bg-gray-700'} text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}>Browse
                                    Quizzes</a>
                                <form action="/logout" method="POST">
                                    <input type="hidden" name="_token" value={csrf}/>
                                    <button type={"submit"}
                                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign
                                        Out
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <a href="/login"
                                   className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                <a href="/register"
                                   className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
