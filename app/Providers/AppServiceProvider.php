<?php

namespace App\Providers;

use App\Classroom;
use App\Environ;
use App\Organization;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerInertia();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    public function registerInertia()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::share([
            //* Send user Information to all frontend views
            'auth' => function () {
                $settings = authUser() ? authUser()->settings()->first() : null;
                $preferences = $settings->preferences ?? null;
                $can_practice = $preferences->add_practice_questions ?? null;
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'first_name' => authUser()->first_name,
                        'middle_name' => authUser()->middle_name,
                        'last_name' => authUser()->last_name,
                        'gender' => authUser()->gender,
                        'email' => authUser()->email,
                        'telephone' => authUser()->telephone,
                        'date_of_birth' => authUser()->date_of_birth,
                        'school' => authUser()->school,
                        'school_town' => authUser()->school_town,
                        'profile_image' => authUser()->profile_image,
                        'initial_role' => authUser()->initial_role,
                        'can' => [
                            'Dashboard' => true,
                            'Organizations' => authUser()->can('create_organizations'),
                            'Environs' => authUser()->can('create_environs'),
                            'Classrooms' => authUser()->can('create_classrooms'),
                            'Classes' => authUser()->can('participate_classes'),
                            'Practice' => ((authUser()->can('practice')) && !(authUser()->hasRole('admin'))) || ($can_practice->enabled ?? false),
                            'Settings' => true,
                            'all' =>  authUser()->can('all'),

                        ]
                    ] : null,
                ];
            },
            // * User settings
            'settings' => function () {
                return authUser() ? authUser()->settings()->first() : null;
            },
            //* Make errors available to react
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
            //* flash messages
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                    'info' => Session::get('info'),
                    'warning' => Session::get('warning'),
                ];
            },
            'response' => function () {
                return Session::get('response');
            },
            'notifications' => function () {
                return authUser() ? authUser()->unreadNotifications : null;
            },
        ]);
    }
}
