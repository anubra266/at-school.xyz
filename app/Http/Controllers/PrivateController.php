<?php

namespace App\Http\Controllers;

use App\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PrivateController extends Controller
{

    public function home()
    {
        $user = User::withCount([
            'organizations', 'environs', 'classrooms', 'classes',
            'theoryResults', 'objectiveResults', 'practiceResults'
        ])->find(authUser());
        return Inertia::render('Dashboard/home', ["user" => $user[0]]);
    }
}
