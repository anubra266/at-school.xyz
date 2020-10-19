<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('AuthUser')) {
    /**
     * Get the authenticated User
     * @return \App\Models\User
     */
    function authUser()
    {
        return Auth::user();
    }
}

if (!function_exists('backward')) {
    /**
     * Redirect to previous route
     * @return Illuminate\Routing\Redirector::back
     */
    function backward()
    {
        return redirect()->back();
    }
}
