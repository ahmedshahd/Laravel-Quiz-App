interface Question {
    id: number;
    question: string;
    ans1: string;
    ans2: string;
    ans3: string;
    ans4: string;
    correct_answer: number;
}

interface Quiz {
    name: string;
    user: {
        username: string;
        email: string;
        email_verified_at: string;
        created_at: string;
        updated_at: string;
    }
    created_at: string
    updated_at: string
    id: number
    user_id: number
}

export type {Question, Quiz};
