<?php

namespace App\Services;

use App\TheoryTest;

class TestAnswerService
{


    public function saveTheory($test, $request)
    {
        $answer = $request->answer;
        $test->answers()->updateOrCreate(['id' => $request->id], ['answer' => $answer ? $answer : "Empty Answer", 'user_id' => authUser()->id]);
    }

    public function saveobjective($test, $request)
    {
        authUser()->objectiveAnswers()->createMany($request->answers);
        $answers = $test->answers()->whereUser_id(authUser()->id)
            ->whereHas('Option', function ($query) {
                $query->whereIs_correct(true);
            })->count();

        return authUser()->objectiveResults()
            ->create(["objective_test_id" => $test->id, "score" => $answers, 'total' => $test->questions()->count()]);
    }
}
