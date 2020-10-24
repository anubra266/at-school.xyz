<?php

namespace App\Http\Middleware;

use Closure;

class PracticeQuestionsContribute
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
        $settings = authUser()->settings()->first();
        if ($settings && $settings->preferences->add_practice_questions->enabled) {
            return $next($request);
        }
        return backward();
    }
}
