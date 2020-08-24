<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Auth::routes();

//? Only Users authenticated and with finished registration
Route::group(['middleware' => ['auth']], function () {

    Route::get('home', 'PrivateController@home')->name('home');

    Route::group(['prefix' => 'organization', 'middleware' => [/*'permission:create_organizations'*/]], function () {
        Route::get('/', 'OrganizationController@index')->name('organization.index');
        Route::post('/', 'OrganizationController@store')->name('organization.create');
        Route::patch('/{organization}/newcode', 'OrganizationController@ChangeCode')->name('organization.change_code');
        Route::patch('/', 'OrganizationController@update')->name('organization.edit');
    });
    Route::group(['prefix' => 'staff'], function () {
        Route::get('/', 'EnvironController@index')->name('environ.index');
    });
});



// ?Password Reset Routes...
// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
// Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
// Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
// ?Email Verification Routes...
// Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
// Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
// Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');

// Route::get('/home', 'HomeController@index')->name('home');
