<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function create()
    {
//        also include the csrf token
        return Inertia::render('Auth/Login');
    }

    public function store()
    {
//        get username
        $attributes = request()->validate([
            'username' => ['required', 'min:3', 'max:255'],
            'password' => ['required', 'min:3', 'max:255'],
        ]);
        if (!Auth::attempt($attributes)) {
            throw ValidationException::withMessages(['password' => 'Your username and password do not match!']);
        }

        request()->session()->regenerate();
        return redirect('/');

    }

    public function destroy()
    {
        Auth::logout();
        return redirect('./');
    }
}
