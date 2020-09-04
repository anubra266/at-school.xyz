<?php

namespace App\Services;

use App\TheoryQuestion;

class TheoryQuestionService
{

    public function __construct(TheoryQuestion $theoryQuestion)
    {
        $this->theoryQuestion = $theoryQuestion;
    }
    public function store($test, $request)
    {
        return $test->questions()->create($request->validated());
    }

    public function update($request)
    {
        $this->theoryQuestion->find($request->id)->update($request->validated());
    }
}
