<?php

namespace App;

use App\PracticeCourse;
use Illuminate\Database\Eloquent\Model;

class PracticeCategory extends Model
{
    protected $guarded = [];

    public function courses()
    {
        return $this->hasMany(PracticeCourse::class);
    }
}
