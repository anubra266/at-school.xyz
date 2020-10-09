<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\RolesService;
use App\Http\Requests\ClassRequest;
use App\Http\Requests\EnvironRequest;
use App\Http\Requests\OrganizationRequest;

class RolesController extends Controller
{
    public function __construct(RolesService $rolesService)
    {
        $this->role = $rolesService;
        $this->middleware(function ($request, $next) {
            if ($request->user()->roles()->count() !== 0) {
                return redirect()->route('home');
            }
            return $next($request);
        });
    }
    public function setRole($role)
    {
        return Inertia::render("AccountSetup/$role");
    }

    public function createOrg(OrganizationRequest $request)
    {
        $this->role->createOrg($request);
        return redirect()->route('home')->with('success', 'Account Setup Complete!');
    }
    public function createEnv(EnvironRequest $request)
    {
        if ($this->role->createEnv($request)) {
            return redirect()->route('home')->with('success', 'Account Setup Complete!');
        }
        return redirect()->back()->with('error', "Invalid Organization code!");
    }
    public function createCrm(EnvironRequest $request)
    {
        if ($this->role->createCrm($request)) {
            return redirect()->route('home')->with('success', 'Account Setup Complete!');
        }
        return redirect()->back()->with('error', "Invalid Environ / Department code!");
    }
    public function joinCls(ClassRequest $classRequest)
    {
        $error = $this->role->joinCls($classRequest)[1];
        if (!$error) {
            return redirect()->route('home')->with('success', "Account Setup Complete");
        }
        return redirect()->back()->with('error', $error);
    }
    public function joinPrc()
    {
        $this->role->joinPrc();
        return redirect()->route('home')->with('success', "Account Setup Complete");
    }
}
