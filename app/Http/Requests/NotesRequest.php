<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NotesRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'category_id' => 'required',
            'title' => 'required|unique:notes',
            'body' => 'required'
        ];
    }


    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'category.required' => 'The category is required.',
            'title.required' => 'The requested note\'s title is required.',
            'title.unique' => 'The title of the note must be unique.',
            'body.required' => 'The body of the note is required.'
        ];
    }
}
