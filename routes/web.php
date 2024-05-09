<?php

use App\Http\Controllers\QuizController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});


Route::get('/register', [RegisterUserController::class, 'create']);
Route::post('/register', [RegisterUserController::class, 'store']);

Route::get('/login', [SessionController::class, 'create']);
Route::post('/login', [SessionController::class, 'store']);
Route::post('/logout', [SessionController::class, 'destroy']);

Route::get('/quizzes/{page}', [QuizController::class, 'index']);
Route::get('/quiz/create', [QuizController::class, 'create']);
Route::get('/quiz/{id}', [QuizController::class, 'show']);
Route::post('/quiz/{id}', [QuizController::class, 'score']);
Route::get('/quiz/{id}/scores', [QuizController::class, 'scores']);
Route::post('/quiz/create', [QuizController::class, 'store']);
