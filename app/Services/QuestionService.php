<?php

namespace App\Services;

use App\Question;
use App\TheoryTest;
use App\ObjectiveTest;

class QuestionService
{

    public function __construct(Question $question)
    {
        $this->question = $question;
    }
    public function getTest($request)
    {
        return $request->type === 'objective' ? ObjectiveTest::class : TheoryTest::class;
    }
    public function store($request)
    {
        $Test = $this->getTest($request);
        $Test::find($request->id)->questions()->create($request->validated());
    }

    public function update($request)
    {
        $this->question->find($request->id)->update($request->validated());
    }
    public function destroy($question)
    {
        $question->delete();
    }
}
