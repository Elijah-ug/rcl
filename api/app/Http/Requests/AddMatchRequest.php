<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddMatchRequest extends FormRequest
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
            "host_team_id"=>["required", "exists:teams,id", "different:visitor_team_id"],
            "visitor_team_id"=>["required", "exists:teams,id", "different:host_team_id"],
            "date"=>["required", "after_or_equal:today"],
            "time"=>["nullable", "date_format:H:i"],
            "venue"=>["required", "string", "min:3", "max:100"],
            "is_played"=>["nullable", "boolean"],
            "matchday"=>["integer","min:1", "max:50"]
        ];
    }
    public function messages(){
        return[
            "host_team_id.different"=>"Host and visitor must be different",
            "visitor_team_id.different"=>"Visitor and host must be different",
            "date.after_or_equal"=>"Match date cannot be past"
        ];
    }
}
