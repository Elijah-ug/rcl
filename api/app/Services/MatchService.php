<?php

namespace App\Services;
use App\Models\Event;
use Illuminate\Validation\ValidationException;
class MatchService{
    // public function used by the controller
    public function create(array $data){
        $this->ensureTeamsAreFree($data);
        return Event::create($data);
    }

    // prtected method to query matches if the're fixed
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
}