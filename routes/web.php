<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::group(['prefix' => 'register'], function () {
    Route::get('', [AuthController::class, 'renderRegister']);
    Route::post('', [AuthController::class, 'register']);
});

Route::group(['prefix' => 'login'], function () {
    Route::get('', [AuthController::class, 'renderLogin']);
    Route::post('', [AuthController::class, 'login']);
});


Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/quizzes/{page}', [QuizController::class, 'index']);
Route::get('/quiz/create', [QuizController::class, 'create']);
Route::get('/quiz/{id}', [QuizController::class, 'show']);
Route::post('/quiz/{id}', [QuizController::class, 'score']);
Route::post('/quiz/create', [QuizController::class, 'store']);
