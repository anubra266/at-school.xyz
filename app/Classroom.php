<?php

namespace App;

use App\ObjectiveTest;
use Mtvs\EloquentHashids\HasHashid;
use Illuminate\Database\Eloquent\Model;
use Mtvs\EloquentHashids\HashidRouting;

class Classroom extends Model
{
    use HasHashid, HashidRouting;

    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function Environ() 
    {
        return $this->belongsTo(Environ::class);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'classroom_student', 'classroom_id', 'student_id')->withTimestamps();
    }

    public function theoryTests()
    {
        return $this->hasMany(TheoryTest::class);
    }

    public function objectiveTests()
    {
        return $this->hasMany(ObjectiveTest::class);
    }
}
