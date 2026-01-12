<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model{
    //
    protected $fillable=["name", "coach", "captain"];
    public function players(){
        return $this->hasMany(Player::class);
    }
    // team has many matches in a season
    public function matches(){
        return $this->hasMany(Event::class);
    }
}
