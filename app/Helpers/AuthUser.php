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
     * Redirect to request route
     * @param string $status Status of Request Response
     * @param string $response The Request's response
     */
    function backward($status = '', $response = '')
    {
        return redirect()->back()->with($status, $response);
    }
}
