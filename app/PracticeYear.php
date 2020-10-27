<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PracticeYear extends Model
{
    protected $guarded = [];

    public function questions()
    {
        return $this->hasMany(Question::class, 'practice_year_id');
    }

    public function course()
    {
        return $this->belongsTo(PracticeCourse::class, 'practice_course_id');
    }
}
