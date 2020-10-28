<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PracticeAnswer extends Model
{
    protected $guarded = [];

    public function Option()
    {
        return $this->belongsTo(ObjectiveOption::class, 'objective_option_id');
    }
}
