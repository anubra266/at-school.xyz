<?php

namespace App\Http\Controllers;

use App\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkspaceController extends Controller
{

    public function hash($classroom)
    {
        $classroom->hash = $classroom->hashid();
        return $classroom;
    }

    public function home(Classroom $classroom)
    {
        $classroom->load('Environ.Organization');
        $classroom->load('User');
        $classroom = $this->hash($classroom);
        return Inertia::render('Workspace/home', ['classroom' => $classroom]);
    }

    public function members(Classroom $classroom)
    {
        $classroom = $this->hash($classroom);
        $members = $classroom->students()->get();
        return Inertia::render('Workspace/members/', ['classroom' => $classroom, 'members' => $members]);
    }
}
