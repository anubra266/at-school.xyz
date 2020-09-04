<?php

namespace App\Services;

use App\ObjectiveTest;
use App\ObjectiveQuestion;

class ObjectiveQuestionService
{
    public function __construct(ObjectiveQuestion $objectiveQuestion)
    {
        $this->objectiveQuestion = $objectiveQuestion;
    }
    public function store($request)
    {
        return ObjectiveTest::find($request->id)->questions()->create($request->validated());
    }

    public function update($request)
    {
        $this->objectiveQuestion->find($request->id)->update($request->validated());
    }
    public function destroy($question)
    {
        $question->delete();
    }
}
