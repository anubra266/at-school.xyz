<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ObjectiveOption extends Model
{
    protected $guarded = [];

    public function Question()
    {
        return $this->belongsTo(ObjectiveQuestion::class);
    }
}
