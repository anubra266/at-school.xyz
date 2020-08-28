<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\ServiceProvider;
use App\Helpers\CreateCode;
use Faker\Generator as Faker;


class AtSchoolProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        require_once app_path('Helpers/AuthUser.php');
        require_once app_path('Helpers/ClassroomAuthorization.php');
        require_once app_path('Helpers/CreateCode.php');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(Faker $faker)
    {
        Builder::macro('generateCode', function ($prefix) use ($faker) {
            $code = CreateCode([$this, $prefix, $faker]);
            return $code;
        });
    }
}
