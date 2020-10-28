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

    public function answers()
    {
        return $this->hasMany(ObjectiveAnswer::class);
    }

    public function practiceAnswers()
    {
        return $this->hasMany(PracticeAnswer::class);
    }
}
