<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    //
    protected $fillable=["host_team_id", "visitor_team_id", "host_score", "visitor_score", "stage"];
    public function host(){
        return $this->belongsTo(Team::class, "host_team_id");
    }
    public function visitor(){
        return $this->belongsTo(Team::class, "visitor_team_id");
    }
}
