<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PrivateController extends Controller
{

    public function home(){
        return Inertia::render('Home');
    }

    public function FinishRegistration(){
        return Inertia::render('Register/Finish');
    }
}
