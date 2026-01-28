<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMatchRequest;
use App\Models\Event;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(){
        $matches = Event::all();
        return response()->json(["message"=>"matches fetched", "data"=>$matches]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddMatchRequest $request){
        $match= Event::create($request->validated());
        return response()->json(["message"=>"Match added", "data"=>$match], 201);
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
