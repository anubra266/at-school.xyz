<?php

namespace App\Services;

use App\TheoryTest;

class TestAnswerService
{


    public function saveTheory($test, $request)
    {
        $answer = $request->answer;
        $test->answers()->updateOrCreate(['id' => $request->id], ['answer' => $answer, 'user_id' => authUser()->id]);
    }
}
