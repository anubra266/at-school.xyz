<?php

namespace App\Http\Middleware;

use Closure;

class EducatorOnly
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
        if (checkClass($request->classroom, $request->user()) === 'educator') {
            return $next($request);
        } else { 
            return redirect()->route('home');
        }
    }
}
