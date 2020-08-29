<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TheoryQuestion extends Model
{
    protected $guarded = [];

    public function Test()
    {
        return $this->belongsTo(TheoryTest::class);
    }
}
