<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\OrganizationRequest;
use App\Organization;
use App\Services\OrganizationService;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    public function __construct(OrganizationService $organizationService)
    {
        $this->organizationService = $organizationService;
    }


    public function index()
    {
        $organizations = $this->organizationService->index();
        return Inertia::render('Dashboard/organization/', ['organizations' => $organizations]);
    }
    public function store(OrganizationRequest $request)
    {
        $this->organizationService->store($request);
        return redirect()->back()->with('success', " Organization saved successfully");
    }
    public function update(OrganizationRequest $request, Organization $organization)
    {
        $this->organizationService->update($request, $organization);
        return redirect()->back()->with('success', " Organization updated successfully");
    }

    public function ChangeCode(Organization $organization)
    {
        $this->organizationService->ChangeCode($organization);
        return redirect()->back()->with('success', " Organization code generated successfully");
    }
}
