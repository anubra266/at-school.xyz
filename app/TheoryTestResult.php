<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TheoryTestResult extends Model
{
    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
