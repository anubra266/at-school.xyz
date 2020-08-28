<?php

namespace App\Http\Controllers;

use App\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkspaceController extends Controller
{

    public function pop($classroom)
    {
        $classroom->hash = $classroom->hashid();
        $classroom->role = checkClass($classroom, authUser());
        return $classroom;
    }

    public function home(Classroom $classroom)
    {
        $classroom = $this->pop($classroom);
        $classroom->load('Environ.Organization');
        $classroom->load('User');
        return Inertia::render('Workspace/home', ['classroom' => $classroom]);
    }

    public function members(Classroom $classroom)
    {
        $classroom = $this->pop($classroom);
        $members = $classroom->students()->get();
        return Inertia::render('Workspace/members/', ['classroom' => $classroom, 'members' => $members]);
    }

    public function theoryTest(Classroom $classroom)
    {
        $classroom = $this->pop($classroom);
        $classroom->load('User');
        return Inertia::render('Workspace/tests/edu-theory/', ['classroom' => $classroom]);
    }
    public function objectiveTest(Classroom $classroom)
    {
        $classroom = $this->pop($classroom);
        $classroom->load('User');
        return Inertia::render('Workspace/tests/edu-objective/', ['classroom' => $classroom]);
    }
}
