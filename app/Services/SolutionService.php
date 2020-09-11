<?php

namespace App\Services;

use App\Solution;

class SolutionService
{


    public function save($question, $request)
    {
        $question->Solution()->updateOrCreate(['id' => $request->id], $request->validated());
    }
}
