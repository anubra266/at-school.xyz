<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\OrganizationRequest;
use App\Services\OrganizationService;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    public function __construct(OrganizationService $organizationService)
    {
        $this->organizationService = $organizationService;
    }

    public function store(OrganizationRequest $request)
    {
        $organization = $this->organizationService->store($request);
        return redirect()->back()->with('success', $organization['name'] . " Organization saved successfully");
    }

    public function index()
    {
        return Inertia::render('Dashboard/organization');
    }
}
