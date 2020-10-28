<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PracticeResult extends Model
{
    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function test()
    {
        return $this->belongsTo(PracticeTest::class, 'practice_test_id');
    }
}
