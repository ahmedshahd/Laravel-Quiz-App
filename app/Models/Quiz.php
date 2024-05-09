<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function scores()
    {
        return $this->hasMany(Score::class);
    }
}
