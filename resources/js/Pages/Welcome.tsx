import Layout from "@/Templates/Layout";

const Welcome = ({ auth, csrf }: { csrf: string; auth: any }) => {
    return (
        <Layout isLoggedIn={auth.user} csrf={csrf}>

                <div className="container mx-auto px-4 my-20">
                    <h1 className="text-6xl font-bold mt-8 mb-8">Welcome to the Quiz App!</h1>
                    <p className="text-lg mb-4">Get ready to test your knowledge.</p>
                    <div className="flex flex-col md:flex-row">
                        {auth.user ?
                            <a href={"/quizzes/1"} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Quiz</a> :
                            <>
                                <div><a href='/register'
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-2 md:mr-2">Get
                                    Started</a></div>
                                <span className="text-lg md:my-auto">or</span>
                                <div><a href='/login'
                                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mt-2 md:ml-2">Login</a>
                                </div>
                            </>}
                    </div>
                </div>
        </Layout>
    );
};

export default Welcome;
