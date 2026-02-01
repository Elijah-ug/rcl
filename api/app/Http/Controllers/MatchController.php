<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMatchRequest;
use App\Http\Requests\UpdateMatchRequest;
use App\Models\Event;
use App\Services\MatchService;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(){
        $matches = Event::with(["host", "visitor"])->orderBy("date", "asc")->get();
        return response()->json(["message"=>"matches fetched", "data"=>$matches]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddMatchRequest $request, MatchService $service){
        $match=  $service->create($request->validated());
        return response()->json(["message"=>"Match added", "data"=>$match], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event){
        $event->load(["host", "visitor"]);
        return response()->json(["message"=>"match fetched", "data"=>$event]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMatchRequest $request, Event $event){
        $event->update($request->validated());
        return response()->json(["message"=>"Match Updated", "data"=>$event]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
