<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ObjectiveTest extends Model
{
    protected $guarded = [];

    public function Classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'obj_test_id');
    }

    public function answers()
    {
        return $this->hasManyThrough(ObjectiveAnswer::class, Question::class, 'obj_test_id', 'question_id');
    }

    public function results()
    {
        return $this->hasMany(ObjectiveResult::class);
    }
}
