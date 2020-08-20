<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//?Index route
Route::get('/', 'PublicController@landing')->name('landing');

//?login routes
Route::get('login', 'PublicController@login')->name('login.form');
Route::post('login', 'Auth\LoginController@login')->name('login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'PublicController@register')->name('register.form');
Route::post('register', 'Auth\RegisterController@register')->name('register');

Route::get('password/reset', 'PublicController@forgotPassword')->name('password.request');


Route::get('/home', function () {
    return Inertia::render('Home', [
        'users' => ''
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

//* Using put for testing purposes.
Route::put('/submit', function (Request $request) {
    $request->validate([
        'first_name' => 'required',
        'last_name' => 'required',
        'email' => 'required',
    ]);
    return redirect()->back()->with('success', 'Data accepted');
})->name('submit');

// Auth::routes();




// Password Reset Routes...
// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// Email Verification Routes...
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');

// Route::get('/home', 'HomeController@index')->name('home');
