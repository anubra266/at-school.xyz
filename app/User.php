<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }

    public function environs()
    {
        return $this->hasMany(Environ::class);
    }

    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }

    public function classes()
    {
        return $this->belongsToMany(Classroom::class, 'classroom_student', 'student_id', 'classroom_id')->withTimestamps();
    }

    public function objectiveAnswers()
    {
        return $this->hasMany(ObjectiveAnswer::class);
    }

    public function objectiveResults()
    {
        return $this->hasMany(ObjectiveResult::class);
    }
    public function theoryResults()
    {
        return $this->hasMany(TheoryTestResult::class);
    }
}
