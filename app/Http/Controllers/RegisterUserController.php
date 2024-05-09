<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegisterUserController extends Controller
{
    public function store()
    {

        $attributes = request()->validate([
            "username" => ["required",'min:3','max:255'],
            "email" => ["required", 'email'],
            "password" => ['required', 'min:3','max:255'],
            "password_confirmation" => ['required', 'min:3','max:255', 'same:password'],
        ]);

        $user = User::create([
            'username' => $attributes['username'],
            'email' => $attributes['email'],
            'password' => bcrypt($attributes['password']),
        ]);

        Auth::login($user);

        return redirect('/');
    }

    public function create()
    {
        return Inertia::render('Auth/Register');
    }
}
