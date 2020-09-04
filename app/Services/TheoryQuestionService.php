<?php

namespace App\Services;

use App\TheoryQuestion;
use App\TheoryTest;

class TheoryQuestionService
{

    public function __construct(TheoryQuestion $theoryQuestion)
    {
        $this->theoryQuestion = $theoryQuestion;
    }
    public function store($request)
    {
        return TheoryTest::find($request->id)->questions()->create($request->validated());
    }

    public function update($request)
    {
        $this->theoryQuestion->find($request->id)->update($request->validated());
    }
    public function destroy($question)
    {
        $question->delete();
    }
}
