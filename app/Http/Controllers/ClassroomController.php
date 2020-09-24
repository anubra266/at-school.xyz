<?php

namespace App\Http\Controllers;

use App\Classroom;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ClassroomService;
use App\Http\Requests\ClassroomRequest;
use App\User;

class ClassroomController extends Controller
{
    public function __construct(ClassroomService $classroomService)
    {
        $this->classroomService = $classroomService;
    }

    public function index()
    {
        $classrooms = $this->classroomService->index();
        return Inertia::render('Dashboard/classroom/', ['classrooms' => $classrooms]);
    }
    public function store(ClassroomRequest $request)
    {
        if ($this->classroomService->store($request)) {
            return redirect()->back()->with('success', " Classroom saved successfully");
        }
        return redirect()->back()->with('error', "Invalid Environ / Department code!");
    }

    public function block(Classroom $classroom, $student)
    {
        $act = $this->classroomService->block($classroom, $student);
        return redirect()->back()->with('success', " Student $act successfully");
    }

    public function update(ClassroomRequest $request, Classroom $classroom)
    {
        $this->classroomService->update($request, $classroom);
        return redirect()->back()->with('success', " Classroom updated successfully");
    }

    public function ChangeCode(Classroom $classroom)
    {
        $this->classroomService->ChangeCode($classroom);
        return redirect()->back()->with('success', " Classroom code generated successfully");
    }
}
