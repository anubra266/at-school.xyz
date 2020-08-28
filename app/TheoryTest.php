<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TheoryTest extends Model
{

    public function Classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function questions()
    {
        return $this->hasMany(TheoryQuestion::class);
    }
}
