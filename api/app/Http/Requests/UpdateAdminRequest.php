<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        // route model binding
        $admin = $this->route("admin");
        // guard
            $currentAdmin = $this->user();
    // Only allow if the authenticated admin matches the admin being updated
        return $currentAdmin && $currentAdmin->getkey()=== $admin->getkey();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array{
        $adminId = $this->route("admin")->id;
        return [
            "name"=>"sometimes|string|max:100",
            "email"=>"sometimes|email|unique:admins,email,$adminId",
            'password' => 'sometimes|string|min:6',
        ];
    }
}
