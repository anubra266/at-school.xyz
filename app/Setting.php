<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'preferences->theme',
        'preferences->add_practice_questions->permitted',
        'preferences->add_practice_questions->referrer',
        'preferences->add_practice_questions->enabled'
    ];

    protected $casts = [
        'preferences' => 'object',
    ];
}
