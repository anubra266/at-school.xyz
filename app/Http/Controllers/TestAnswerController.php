<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\ObjectiveTest;
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
        if ($test->duration && $request->id) {
            //? redirect if the test is one-time(has duration) and has been taken before
            //TODO Teacher could choose (Only if it has been marked)
            return redirect()->back()->with('error', "That test cannot be retaken");
        }
        $this->testAnswerService->saveTheory($test, $request);
        return redirect()->back()->with('success', "Solution Submitted Successfully");
    }

    public function saveObjective(Classroom $classroom, ObjectiveTest $test, Request $request)
    {
        if ($test->results()->whereUser_id(authUser()->id)->exists()) {
            return redirect()->back()->with('warning', "That test cannot be retaken.");
        }
        $data = $this->testAnswerService->saveObjective($test, $request);
        return redirect()->back()->with('response', $data);
    }
}
