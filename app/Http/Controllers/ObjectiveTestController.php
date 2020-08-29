<?php

namespace App\Http\Controllers;

use App\Classroom;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ObjectiveTestController extends Controller
{
    public function index(Classroom $classroom)
    {
        $classroom = pop($classroom);
        $classroom->load('User');
        return Inertia::render('Workspace/tests/edu-objective/', ['classroom' => $classroom]);
    }
}
