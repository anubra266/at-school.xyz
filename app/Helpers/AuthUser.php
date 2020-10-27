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

if (!function_exists('visit')) {
    /**
     * Redirect to any route
     * @param array $route Named route to visit, and it's parameters
     * @param string $status Status of Request Response
     * @param string $response The Request's response
     */
    function visit($route, $status = '', $response = '')
    {
        return redirect()->route($route[0], $route[1])->with($status, $response);
    }
}
