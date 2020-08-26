<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{

    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'classroom_student', 'classroom_id', 'student_id')->withTimestamps();
    }

    public function Environ()
    {
        return $this->belongsTo(Environ::class);
    }
}
