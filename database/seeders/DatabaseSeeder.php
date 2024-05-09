<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'username' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $this->call(QuizSeeder::class);
        $this->call(QuestionSeeder::class);
        $this->call(ScoreSeeder::class);

    }
}
