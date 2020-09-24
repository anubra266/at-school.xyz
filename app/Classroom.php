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

    protected $appends = ['url', 'hash'];

    protected function getUrlAttribute()
    {
        return $this->attributes['url'] = route('classroom.home', ['classroom' => $this->hashid()]);
    }
    protected function getHashAttribute()
    {
        return $this->attributes['hash'] = $this->hashid();
    }

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
        return $this->belongsToMany(User::class, 'classroom_student', 'classroom_id', 'student_id')->withTimestamps()->withPivot('active')->as('status');
    }
    public function blockedStudents()
    {
        return $this->belongsToMany(User::class, 'classroom_student', 'classroom_id', 'student_id')->wherePivot('active', 0)->withTimestamps();
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
