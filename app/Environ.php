<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Environ extends Model
{
    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function Organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }
}
