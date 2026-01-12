<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddTeamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool{
        return auth("admin")->check();
    }

   
    public function rules(): array
    {
        return [
           "name"=>["required", "string", "min:3", "max:50"],
           "coach"=>["nullable", "string", "min:3", "max:100"],
            "captain"=>["nullable", "string", "min:3", "max:100"]
        ];
    }
}
