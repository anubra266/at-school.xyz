<?php

namespace App\Http\Controllers;

use App\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkspaceController extends Controller
{

    public function home(Classroom $classroom)
    {
        return Inertia::render('Workspace/home', ['classroom' => $classroom,'id'=>$classroom->hashid()]);
    }
}
