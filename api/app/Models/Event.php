<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
        protected $fillable=["host_team_id", "visitor_team_id", "venue", "date", "time"];
        public function host(){
            return $this->belongsTo(Team::class);
        }
        public function visitor(){
            return $this->belongsTo(Result::class);
        }

}
