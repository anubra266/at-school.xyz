<?php

namespace App\Services;

use App\TheoryTest;

class TheoryTestService
{

    public function __construct(TheoryTest $theoryTest)
    {
        $this->theoryTest = $theoryTest;
    }

    public function index($classroom)
    {
        $classroom = pop($classroom)->load('User');
        $tests = $classroom->theoryTests()->get();
        return ['classroom' => $classroom, 'tests' => $tests];
    }

    public function store($classroom, $request)
    {
        return $classroom->theoryTests()->create($request->validated());
    }

    public function edit($classroom, $test)
    {
        $test->load('questions');
        $classroom = pop($classroom)->load('User');
        return ['classroom' => $classroom, 'test' => $test];
    }

    public function update($classroom, $request)
    {
        return $this->theoryTest->find($request->id)->update($request->validated());
    }

    public function destroy($classroom, $test)
    {
        return $test->delete();
    }

    public function list($classroom)
    {
        $classroom = pop($classroom)->load('User');
        $tests = $classroom->theoryTests()->get();
        return ['classroom' => $classroom, 'tests' => $tests, 'type' => 'theory'];
    }
    public function take($classroom, $test)
    {
        $classroom = pop($classroom)->load('User');
        $test->load(['questions', 'answers' => function ($query) {
            return $query->whereUser_id(authUser()->id);
        }]);
        return ['classroom' => $classroom, 'test' => $test];
    }
}
