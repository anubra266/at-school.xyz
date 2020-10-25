<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $guarded = [];

    public function options()
    {
        return $this->hasMany(ObjectiveOption::class);
    }

    public function Solution()
    {
        return $this->hasOne(Solution::class);
    }
}
