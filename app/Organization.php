<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function environs()
    {
        return $this->hasMany(Environ::class);
    }

    public function classrooms()
    {
        return $this->hasManyThrough(Classroom::class, Environ::class);
    }
}
