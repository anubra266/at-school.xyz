<?php

namespace App\Services;

class ResultService
{

    public function eduTheory($classroom)
    {
        $classroom->load('User');
        $tests = $classroom->theoryTests()->latest()->get();
        $tests->load('results.User');
        return ['classroom' => $classroom, 'tests' => $tests];
    }
    public function eduObjective($classroom)
    {
        $classroom->load('User');
        $tests = $classroom->objectiveTests()->latest()->get();
        $tests->load('results.User');
        return ['classroom' => $classroom, 'tests' => $tests];
    }
}
