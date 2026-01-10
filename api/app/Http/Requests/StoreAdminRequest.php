<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAdminRequest extends FormRequest{
    //  * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     
    public function rules(): array{
        return [
             "name"=>"required|string|max:70",
             "email"=>"required|email|unique:admins",
             "password"=>"required|string|min:6|confirmed"
            ];
    }
}
