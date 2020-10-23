<?php

namespace App\Http\Middleware;

use Closure;

class SetRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $a_new_user = authUser()->roles()->count() === 0;
        $potential_role = authUser()->initial_role;
        if ($a_new_user) {
            return redirect()->route('account.setup', ['role' => $potential_role]);
        }
        return $next($request);
    }
}
