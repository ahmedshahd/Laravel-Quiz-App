<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use App\Models\Score;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index($page)
    {
        $perPage = 6;
        $quizzes = Quiz::orderBy('created_at', 'desc')->with('user')->forPage($page, $perPage)->get();
        $totalPages = ceil(Quiz::all()->count() / $perPage);
        return Inertia::render('Quiz/Index', ['quizzes' => $quizzes, 'totalPages' => $totalPages]);
    }
    public function show($id){
        if(Gate::denies('registered-user'))
            return redirect('/login');
        $quiz = Quiz::with('questions')->with('user')->find($id);
        $quiz->questions->each(function ($question) {
            $question->makeHidden(['correct_answer']);
        });
        $score = Score::where('user_id', Auth::user()->id)->where('quiz_id', $id)->latest()->first();
        return Inertia::render('Quiz/Show', ['quiz' => $quiz, 'prevScore' => $score->score ?? null]);
    }
    public function scores($id){
        if(Gate::denies('registered-user'))
            return redirect('/login');
//        sort the scores
        $scores = Quiz::find($id)->scores()->orderBy('score', 'desc')->get();
        return response()->json(['scores' => $scores]);
    }
    public function score(Request $request, $id){

        if(Gate::denies('registered-user'))
            return redirect('/login');
//        validate
        if($request->validate([
            'selectedAnswers' => ['required', 'array', 'max:'.count($request->all()['selectedAnswers'])],
            'selectedAnswers.*' => ['required', 'integer', 'min:0'],
        ])){
            return response()->json(['error' => 'Invalid request'], 400);
        };

        $quiz = Quiz::find($id);
        $selectedAnswers = $request->all()['selectedAnswers'];
        $score = 0;
        for ($index = 0; $index<$quiz->questions->count();$index++){
            if ($selectedAnswers[$index] == $quiz->questions[$index]->correct_answer){
                $score++;
            }
        }
        $scoreData =Score::create([
            'score' => $score,
            'quiz_id' => $id,
            'user_id' => Auth::user()->id
        ]);
        return response()->json(['score' => $scoreData->score,"answers"=>$quiz->questions->pluck('correct_answer')], 200);
    }

    public function create()
    {
        if(Gate::denies('registered-user'))
            return redirect('/login');
        return Inertia::render('Quiz/Create');
    }
    public function store()
    {
        if(Gate::denies('registered-user'))
            return redirect('/login');
        $validatedQuiz = request()->validate([
            'name' => ['required', 'string', 'max:255','min:5'],
            'questions' => ['required', 'array', 'min:1'],
            'questions.*.question' => ['required', 'string', 'max:255','min:1'],
            'questions.*.ans1' => ['required', 'string', 'max:255','min:1'],
            'questions.*.ans2' => ['required', 'string', 'max:255','min:1'],
            'questions.*.ans3' => ['required', 'string', 'max:255','min:1'],
            'questions.*.ans4' => ['required', 'string', 'max:255','min:1'],
            'questions.*.correct_answer' => ['required', 'int' , 'between:1,4']
        ]);
        $validatedQuestions = $validatedQuiz['questions'];
        $quiz = Quiz::create(["name"=>$validatedQuiz['name'],'user_id'=>auth()->user()->id]);
        foreach ($validatedQuestions as $question) {
            Question::create([
                "question"=>$question['question'],
                "ans1"=>$question['ans1'],
                "ans2"=>$question['ans2'],
                "ans3"=>$question['ans3'],
                "ans4"=>$question['ans4'],
                "correct_answer"=>$question['correct_answer'],
                "quiz_id"=>$quiz->id
            ]);
        }
        return redirect('/');
    }
}
