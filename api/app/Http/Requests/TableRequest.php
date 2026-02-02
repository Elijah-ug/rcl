<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TableRequest extends FormRequest
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
            "club"=>["required", "string", "max:120"],
            "mp"=>["nullable", "integer", ],
            "w"=>["nullable", "integer", ],
            "d"=>["nullable", "integer", ],
            "l"=>["nullable", "integer", ],
            "gf"=>["nullable", "integer", ],
            "ga"=>["nullable", "integer", ],
            "gd"=>["nullable", "integer", ],
            "pts"=>["nullable", "integer", ],
            "last_5"=>["nullable", "string", ]
        ];
    }
}
