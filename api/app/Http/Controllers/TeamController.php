<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddTeamRequest;
use App\Models\Team;
use App\Services\MatchService;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $teams = Team::all();
        return response()->json(["message"=>"Teams fetched", "teams"=>$teams], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddTeamRequest $request) {
        $team = Team::create($request->validated());
        return response()->json(["message"=>"Team added", "team"=>$team], 201);
    }

// get free teams
    public function unfixed(MatchService $unfixed, int $matchday){
        $teams = $unfixed->getAvailableTeams($matchday);
        return response()->json(["message"=>"free teams", "data"=>$teams, "matchday"=>$matchday],200);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
