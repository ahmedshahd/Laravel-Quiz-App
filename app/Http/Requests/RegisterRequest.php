<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "username" => ["required", 'min:3', 'max:255'],
            "email" => ["required", 'email'],
            "password" => ['required', 'min:3', 'max:255'],
            "password_confirmation" => ['required', 'min:3', 'max:255', 'same:password'],
        ];
    }
}
