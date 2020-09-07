<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ObjectiveQuestion extends Model
{
    protected $guarded = [];

    public function Test()
    {
        return $this->belongsTo(ObjectiveTest::class);
    }

    public function options()
    {
        return $this->hasMany(ObjectiveOption::class);
    }
}
