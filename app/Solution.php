<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $guarded = [];

    public function Question()
    {
        return $this->belongsTo(Question::class);
    }
}
