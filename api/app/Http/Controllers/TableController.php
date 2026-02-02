<?php

namespace App\Http\Controllers;

use App\Http\Requests\TableRequest;
use App\Models\Table;
use Illuminate\Http\Request;

class TableController extends Controller
{
    public function store(TableRequest $request){
        $table = Table::create($request->validated());
        return response()->json(["message"=>"created table", "data"=>$table], 201);
    }

    public function index(){
        $table = Table::orderByDesc("pts")->get();
        return response()->json(["message"=>"table retrieved", "data"=>$table], 200);
    }

    public function reset(){
        Table::truncate();
        return response()->json(["message"=>"Table reset done!"], 200);
    }
    
}
