<?php

namespace App\Services;
use App\Models\Event;
use App\Models\Team;
use Illuminate\Validation\ValidationException;
class MatchService{
    // public function used by the controller
    public function create(array $data){
        $this->ensureTeamsAreFree($data);
        return Event::create($data);
    }

    // prtected method to query matches if teams are fixed
    protected function teamConflictScope($query, array $data){
        $query->whereIn("matchday", [$data["host_team_id"], $data["visitor_team_id"]])
              ->orWhereIn("matchday", [$data["host_team_id"], $data["visitor_team_id"]]);
    }

    // protected method for business logic
    protected function ensureTeamsAreFree(array $data): void{
        $conflict = Event::where("matchday", $data["matchday"])
        // grouped where clause
        ->where(fn($q)=>$this->teamConflictScope($q, $data))
        ->exists();

        if($conflict){
            throw ValidationException::withMessages(["matchday"=>"One of the teams is already fixed for this match day"]);
        }
    }

    // public function to get free teams for a specific match day
    public function getAvailableTeams(int $matchday){
        $events=Event::where("matchday", $matchday)->get();
        $fixedTeamIds = $events->pluck("host_team_id")
        ->merge($events->pluck("visitor_team_id"))
        ->unique();
        return Team::whereNotIn("id", $fixedTeamIds)->get();
    }
    // function to get all 

}