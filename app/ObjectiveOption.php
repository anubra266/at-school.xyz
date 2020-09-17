<?php

namespace App;

use App\Traits\Excludable;
use Illuminate\Database\Eloquent\Model;

class ObjectiveOption extends Model
{
    use Excludable;
    protected $fillable = ['option', 'is_correct'];

    public function Question()
    {
        return $this->belongsTo(Question::class);
    }
}
