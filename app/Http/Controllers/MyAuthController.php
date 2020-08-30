<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MyAuthController extends Controller
{
    public function showRegistrationForm()
    {
        return Inertia::render('Auth/Register/');
    }

    public function showLoginForm()
    {
        return Inertia::render('Auth/Login/');
    }

    public function showLinkRequestForm()
    {
        return Inertia::render('Auth/ForgotPassword/');
    }
}
