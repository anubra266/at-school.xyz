<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PracticeYearRequest extends FormRequest
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
        return [
            'year' => 'required|date_format:Y|string|size:4'
        ];
    }

    public function messages()
    {
        return [
            'year.date_format' => 'Invalid Year Format',
            'year.size' => 'Invalid Year Format',
        ];
    }
}
