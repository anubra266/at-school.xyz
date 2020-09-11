<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\Services\SolutionService;
use App\Http\Requests\SolutionRequest;
use App\Question;

class SolutionController extends Controller
{
    public function __construct(SolutionService $solutionService)
    {
        $this->solutionService = $solutionService;
    }

    public function save(Classroom $classroom, Question $question, SolutionRequest $request)
    {
        $this->solutionService->save($question, $request);
        return redirect()->back()->with('success', "Solution Saved Successfully");
    }
}
