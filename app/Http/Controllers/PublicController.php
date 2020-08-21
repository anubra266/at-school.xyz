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
}
