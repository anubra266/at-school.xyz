<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EnvironRequest;
use App\Environ;
use App\Services\EnvironService;
use Inertia\Inertia;

class EnvironController extends Controller
{
    public function __construct(EnvironService $environService)
    {
        $this->environService = $environService;
    }


    public function index()
    {
        $environs = $this->environService->index();
        return Inertia::render('Dashboard/environ/', ['environs' => $environs]);
    }

    public function store(EnvironRequest $request)
    {
        if ($this->environService->store($request)) {
            return redirect()->back()->with('success', " Environ saved successfully");
        }
        return redirect()->back()->with('error', "Invalid Organization code!");
    }

    public function update(EnvironRequest $request)
    {
        $this->environService->update($request);
        return redirect()->back()->with('success', " Environ updated successfully");
    }

    public function ChangeCode(Environ $environ)
    {
        $this->environService->ChangeCode($environ);
        return redirect()->back()->with('success', " Environ code generated successfully");
    }
}
