<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return auth("admin")->check();
    }

 
    public function rules(): array
    {
        return [
            "title"=>["required", "string", "min:3", "max:120"],
            "description"=>["required", "string", "min:3", "max:255"],
            "image"=>["nullable", "string", "min:3", "max:120"]
        ];
    }
}
