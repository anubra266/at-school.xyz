<?php

namespace App\Http\Controllers;

use App\Classroom;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\ResultService;

class ResultController extends Controller
{
    public function __construct(ResultService $resultService)
    {
        $this->service = $resultService;
    }
    public function eduTheory(Classroom $classroom)
    {
        $data = $this->service->eduTheory($classroom);
        return Inertia::render('Workspace/results/edu-theory', $data);
    }
}
