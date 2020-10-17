<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = ['preferences->theme'];

    protected $casts = [
        'preferences' => 'object',
    ];
}
