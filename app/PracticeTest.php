<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PracticeTest extends Model
{
    protected $guarded = [];



    public function results()
    {
        return $this->hasMany(PracticeResult::class);
    }

    public function answers()
    {
        return $this->hasMany(PracticeAnswer::class);
    }

    public function year()
    {
        return $this->belongsTo(PracticeYear::class, 'practice_year_id');
    }
}
