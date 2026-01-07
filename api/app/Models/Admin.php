<?php

namespace App\Models;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable{
    //
    use HasFactory, Notifiable;
    // mass asignable attributes
    protected $fillable=["name", "email", "password"];
    // hidden attributes for serialization
    protected $hidden=["password", "remember_token"];
    // admin news posts
    public function news(){
        return $this->hasMany(News::class);
    }

    // attributes that should be cast
    public function cast(){
        return ["email_verified_at"=>"datetime", "password"=>"hashed"];
    }

}
