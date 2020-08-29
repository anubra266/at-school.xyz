<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\Http\Requests\TheoryTestRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\TheoryTestService;

class TheoryTestController extends Controller
{

    public function __construct(TheoryTestService $theoryTestService)
    {
        $this->theoryTestService = $theoryTestService;
    }

    public function index(Classroom $classroom)
    {
        $data = $this->theoryTestService->index($classroom);
        return Inertia::render('Workspace/tests/edu-theory/', $data);
    }

    public function store(Classroom $classroom, TheoryTestRequest $request)
    {
        $test = $this->theoryTestService->store($classroom, $request);
        return redirect()->back()->with('success', "");
    }
}
