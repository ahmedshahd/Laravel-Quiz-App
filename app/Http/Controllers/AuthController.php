<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create($data);

        Auth::login($user);

        return redirect('/');
    }

    public function renderRegister()
    {
        return Inertia::render('Auth/Register');
    }


    public function renderLogin()
    {
        //        also include the csrf token
        return Inertia::render('Auth/Login');
    }

    public function login(
        LoginRequest $request
    ) {
        $data = $request->validated();

        if (!Auth::attempt($data)) {
            throw ValidationException::withMessages(['password' => 'Your username and password do not match!']);
        }

        request()->session()->regenerate();
        return redirect('/');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('./');
    }
}
