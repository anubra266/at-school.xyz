<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\Http\Requests\TheoryTestRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\TheoryTestService;
use App\TheoryTest;

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
        $this->theoryTestService->store($classroom, $request);
        return redirect()->back()->with('success', "Assessment Created Successfully");
    }

    public function edit(Classroom $classroom, TheoryTest $test)
    {
        $data = $this->theoryTestService->edit($classroom, $test);
        return Inertia::render('Workspace/tests/edu-theory/edit/', $data);
    }
    public function update(Classroom $classroom, TheoryTestRequest $request)
    {
        $this->theoryTestService->update($classroom, $request);
        return redirect()->back()->with('success', "Assessment Updated Successfully");
    }
    public function destroy(Classroom $classroom, TheoryTest $test)
    {
        $this->theoryTestService->destroy($classroom, $test);
        return redirect()->back()->with('success', "Assessment Deleted Successfully");
    }

    //? Students Section

    public function list(Classroom $classroom)
    {
        $data = $this->theoryTestService->list($classroom);
        return Inertia::render('Workspace/tests/stud-test/', $data);
    }


    //? Take Assessment
    public function take(Classroom $classroom, TheoryTest $test)
    {
        $data = $this->theoryTestService->take($classroom, $test);
        return Inertia::render('ExamHall/theory', $data);
    }
}
 