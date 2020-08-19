<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public static function landing()
    {
        return Inertia::render('Landing');
    }
    public static function login()
    {
        return Inertia::render('Auth/Login');
    }
    public static function register()
    {
        return Inertia::render('Auth/Register');
    }
    public static function forgotpassword()
    {
        return Inertia::render('Auth/ForgotPassword');
    }
}
