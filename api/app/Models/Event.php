<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
        protected $fillable=["host", "visitor", "venue", "date", "time"];
        public function teams(){
            return $this->belongsToMany(Team::class);
        }
        public function result(){
            return $this->belongsTo(Result::class);
        }

}
