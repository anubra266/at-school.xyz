<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TheoryQuestion extends Model
{
    public function Test()
    {
        return $this->belongsTo(TheoryTest::class);
    }
}
