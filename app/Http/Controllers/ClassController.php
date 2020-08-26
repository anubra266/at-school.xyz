<?php

namespace App\Http\Controllers;

use App\Classroom;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ClassService;
use App\Http\Requests\ClassRequest;

class ClassController extends Controller
{
    public function __construct(ClassService $classService)
    {
        $this->classService = $classService;
    }
    public function index()
    {
        dd(authUser()->permissions()->pluck('name'));
        $classes = $this->classService->index();
        return Inertia::render('Dashboard/class', ['classes' => $classes]);
    }

    public function join(ClassRequest $classRequest)
    {
        $error = $this->classService->join($classRequest)[1];
        if (!$error) {
            return redirect()->back()->with('success', "You joined Classroom Successfully");
        }
        return redirect()->back()->with('error', $error);
    }

    public function leave(Classroom $classroom)
    {
        $this->classService->leave($classroom);
        return redirect()->back()->with('success', "You left the Classroom Successfully");
    }
}
