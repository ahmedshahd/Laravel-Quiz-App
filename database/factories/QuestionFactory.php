<?php

namespace Database\Factories;

use App\Models\Quiz;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'question'=>'2+2',
            'ans1'=>"3",
            'ans2'=>"2",
            'ans3'=>"4",
            'ans4'=>"1",
            'correct_answer'=>3,
            'quiz_id'=>Quiz::all()->random()->id
        ];
    }
}
