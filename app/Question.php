<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $guarded = [];

    public function ObjectiveTest()
    {
        return $this->belongsTo(ObjectiveTest::class);
    }
    public function TheoryTest()
    {
        return $this->belongsTo(THeoryTest::class);
    }

    public function options()
    {
        return $this->hasMany(ObjectiveOption::class);
    }

    public function Solution()
    {
        return $this->hasOne(Solution::class);
    }
}
