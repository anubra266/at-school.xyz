<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ObjectiveTest extends Model
{
    protected $guarded = [];

    public function Classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function questions() 
    {
        return $this->hasMany(Question::class, 'obj_test_id');
    }
}
