<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\TheoryTest;
use Illuminate\Http\Request;
use App\Services\TestAnswerService;

class TestAnswerController extends Controller
{

    public function __construct(TestAnswerService $testAnswerService)
    {
        $this->testAnswerService = $testAnswerService;
    }

    public function saveTheory(Classroom $classroom, TheoryTest $test, Request $request)
    {
        $this->testAnswerService->saveTheory($test, $request);
        return redirect()->back()->with('success', "Solution Submitted Successfully");
    }
}
