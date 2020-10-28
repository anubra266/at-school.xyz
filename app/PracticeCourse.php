<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PracticeCourse extends Model
{
    protected $guarded = [];

    public function years()
    {
        return $this->hasMany(PracticeYear::class);
    }

    public function category()
    {
        return $this->belongsTo(PracticeCategory::class, 'practice_category_id');
    }
}
