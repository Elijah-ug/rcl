<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    //
    protected $fillable=["host_score", "visitor_score"];
    public function event(){
        return $this->hasMany(Event::class);
    }
}
