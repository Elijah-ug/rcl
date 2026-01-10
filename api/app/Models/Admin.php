<?php

namespace App\Models;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable{
    //
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable=["name", "email", "password"];
    // hidden attributes for serialization
    protected $hidden=["password", "remember_token"];
    // admin news posts
    public function news(){
        return $this->hasMany(News::class);
    }

    // attribute casting
        protected $casts = ["email_verified_at"=>"datetime", "password"=>"hashed"];
    

}
