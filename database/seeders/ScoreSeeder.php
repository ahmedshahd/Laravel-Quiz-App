<?php

namespace Database\Seeders;

use App\Models\Score;
use Illuminate\Database\Seeder;

class ScoreSeeder extends Seeder
{
    public function run(): void
    {
        Score::factory(5)->create();
    }
}
