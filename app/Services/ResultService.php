<?php

namespace App\Services;

class ResultService
{

    public function eduTheory($classroom)
    {
        $tests = $classroom->objectiveTests()->latest()->get();
        $tests->load('results.User');
        return ['classroom' => $classroom, 'tests' => $tests];
    }
}
