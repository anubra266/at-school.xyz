<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BasicSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user = authUser()->id;
        return [
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'last_name' => 'required|string',
            'gender' => 'required|string',
            'date_of_birth' => 'required|date|before_or_equal:today',
            'gender' => 'required|string',
            'email' => "required|email|unique:users,email,{$user}",
            'telephone' => 'required|numeric',
            'school' => 'required|string',
            'school_town' => 'required|string',
        ];
    }
}
