<?php

namespace App\Services;

use App\Question;
use App\TheoryTest;
use App\ObjectiveTest;
use App\PracticeYear;

class QuestionService
{

    public function __construct(Question $question)
    {
        $this->question = $question;
    }
    public function getTest($request)
    {
        switch ($request->type) {
            case 'objective':
                return ObjectiveTest::class;
                break;
            case 'theory':
                return TheoryTest::class;
                break;
            default:
                return PracticeYear::class;
                break;
        }
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

    public function import($request)
    {
        $testModel = $this->getTest($request);
        $test = $testModel::find($request->test);
        $rows = $request->questions;
        $count = count($rows);
        foreach ($rows as $row) {
            $question = $test->questions()->create(["question" => $row['question']]);
            $question->options()->createMany($row['options']);
        }
        return $request->mode === "some" ? "$count Valid" : "All $count";
    }
}
