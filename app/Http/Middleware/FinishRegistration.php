<?php

namespace App\Http\Middleware;

use Closure;

class FinishRegistration
{

    /**
     * Check if User has finished registration.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //* get user
        $user = $request->user();
        //* get user roles
        $user_roles = $user->roles()->get();
        //* If user has roles, then registration was finished
        if (count($user_roles) > 0) {
            return $next($request);
        } else {
            return redirect()->route('register.finish');
        }
    }
}
