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
}
