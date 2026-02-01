<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MatchResultRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth("admin")->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "host_team_id"=>["required", "exists:teams,id", "different:visitor_team_id"],
            "visitor_team_id"=>["required", "exists:teams,id", "different:host_team_id"],
            "host_score"=>["required", "integer", "min:0"],
            "visitor_score"=>["required", "integer", "min:0"],
            "stage"=>["nullable", "string"]
        ];
    }
}
