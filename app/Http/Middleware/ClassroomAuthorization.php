<?php

namespace App\Http\Middleware;

use Closure;

class ClassroomAuthorization
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
        $classroom = $request->classroom;
        $user = $request->user();
        $role = checkClass($classroom, $user);
        if ($role) {
            return $next($request);
        }
        return redirect()->route('home');
    }
}
