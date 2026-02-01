<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
        protected $fillable=["host_team_id", "visitor_team_id", "date", "time", "venue", "matchday", "host_score", "visitor_score", "status"];
        public function host(){
            return $this->belongsTo(Team::class, "host_team_id");
        }
        public function visitor(){
            return $this->belongsTo(Team::class, "visitor_team_id");
        }

}
