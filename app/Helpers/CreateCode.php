<?php

use Illuminate\Database\Eloquent\Builder;


function GenCode($data)
{
    [$model, $prefix, $faker] = $data;
    //* Generate random code
    $code =  "$prefix-" . ($faker->numberBetween(10000, 90000) . '-' . $faker->numberBetween(60000, 99000));
    $duplicates = $model->whereCode($code)->get();
    return [$code, count($duplicates) > 0];
}

if (!function_exists('CreateCode')) {
    /**
     * Genrate random code for a Model
     * @param {string} prefix String added to beginning of Code
     */
    function CreateCode($data)
    {
        //* Check code exists
        [$code, $code_exists] = GenCode($data);
        while ($code_exists) {
            [$code, $code_exists] = GenCode($data);
        }
        return $code;
    }
}
