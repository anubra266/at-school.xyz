<?php

namespace App\Http\Controllers;

use App\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkspaceController extends Controller
{

    public function home(Classroom $classroom)
    {
        $classroom = $classroom->load('Environ.Organization')->load('User');
        return Inertia::render('Workspace/home', ['classroom' => $classroom]);
    }

    public function members(Classroom $classroom)
    {
        $members = $classroom->students()->get();
        return Inertia::render('Workspace/members/', ['classroom' => $classroom, 'members' => $members]);
    }
}
