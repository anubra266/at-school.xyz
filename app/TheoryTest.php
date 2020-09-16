<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TheoryTest extends Model
{
    protected $guarded = [];

    public function Classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'theory_test_id');
    }

    public function answers()
    {
        return $this->hasMany(TheoryAnswer::class);
    }
}
