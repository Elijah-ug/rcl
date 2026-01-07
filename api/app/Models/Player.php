<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    //
    protected $fillable=["name", "dob", "residence", "gender"];
    public function team(){
        return $this->belongsTo(Team::class);
    }
}
