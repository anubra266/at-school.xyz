<?php

namespace App\Services;

use App\ObjectiveTest;

class ObjectiveTestService
{
    public function __construct(ObjectiveTest $objectiveTest)
    {
        $this->objectiveTest = $objectiveTest;
    }

    public function index($classroom)
    {
        $classroom = pop($classroom)->load('User');
        $tests = $classroom->objectiveTests()->get();
        return ['classroom' => $classroom, 'tests' => $tests];
    }

    public function store($classroom, $request)
    {
        return $classroom->objectiveTests()->create($request->validated());
    }

    public function edit($classroom, $test)
    {
        $test->load(['questions.options', 'questions.solution']);
        $classroom = pop($classroom)->load('User');
        return ['classroom' => $classroom, 'test' => $test];
    }

    public function update($classroom, $request)
    {
        return $this->objectiveTest->find($request->id)->update($request->validated());
    }

    public function destroy($classroom, $test)
    {
        return $test->delete();
    }

    public function list($classroom)
    {
        $classroom = pop($classroom)->load('User');
        $tests = $classroom->objectiveTests()->get();
        return ['classroom' => $classroom, 'tests' => $tests, 'type' => 'objective'];
    }

    public function take($classroom, $test)
    {
        $classroom = pop($classroom)->load('User');
        $test->load(['questions.options' => function ($q) {
            $q->exclude('is_correct');
        }]);
        return ['classroom' => $classroom, 'test' => $test];
    }
    public function review($classroom, $test)
    {
        $classroom = pop($classroom)->load('User');
        $test->load(['questions.options.answers' => function ($q) {
            $q->whereUser_id(authUser()->id);
        }]);
        $test->noCountdown = true;
        return ['classroom' => $classroom, 'test' => $test];
    }
}
