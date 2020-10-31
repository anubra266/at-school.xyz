<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\Http\Requests\ObjectiveTestRequest;
use App\ObjectiveTest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ObjectiveTestService;

class ObjectiveTestController extends Controller
{
    public function __construct(ObjectiveTestService $objectiveTestService)
    {
        $this->objectiveTestService = $objectiveTestService;
    }
    public function index(Classroom $classroom)
    {
        $data = $this->objectiveTestService->index($classroom);
        return Inertia::render('Workspace/tests/edu-objective/', $data);
    }

    public function store(Classroom $classroom, ObjectiveTestRequest $request)
    {
        $test = $this->objectiveTestService->store($classroom, $request);
        return redirect()->route('objective.edit', ["test" => $test, "classroom" => $test->Classroom()->first()])
            ->with('success', "$test->title Assessment Created Successfully");
    }

    public function edit(Classroom $classroom, ObjectiveTest $test)
    {
        $data = $this->objectiveTestService->edit($classroom, $test);
        return Inertia::render('Workspace/tests/edu-objective/edit/', $data);
    }
    public function update(Classroom $classroom, ObjectiveTestRequest $request)
    {
        $result = $this->objectiveTestService->update($classroom, $request);
        if ($result === 'open') {
            return redirect()->back()->with('warning', "You can't edit an open Test");
        }
        return redirect()->back()->with('success', "Assessment Updated Successfully");
    }
    public function status(Classroom $classroom, Request $request)
    {
        [$status, $message] = $this->objectiveTestService->status($classroom, $request);
        return redirect()->back()->with($status, $message);
    }

    public function destroy(Classroom $classroom, ObjectiveTest $test)
    {
        $this->objectiveTestService->destroy($classroom, $test);
        return redirect()->back()->with('success', "Assessment Deleted Successfully");
    }

    //? Students Section

    public function list(Classroom $classroom)
    {
        $data = $this->objectiveTestService->list($classroom);
        return Inertia::render('Workspace/tests/stud-test/', $data);
    }

    //? Take Assessment
    public function take(Classroom $classroom, ObjectiveTest $test)
    {
        $data = $this->objectiveTestService->take($classroom, $test);
        return Inertia::render('ExamHall/objective', $data);
    }
    //? Review Assessment
    public function review(Classroom $classroom, ObjectiveTest $test)
    {
        $data = $this->objectiveTestService->review($classroom, $test);
        return Inertia::render('ExamHall/objective/review', $data);
    }
}
