<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsPostRequest;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(){
        $news = News::all();
        return response()->json(["message"=>"All news posts", "data"=>$news], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NewsPostRequest $request){
        $news = News::create($request->validated());
        return response()->json(["massage"=>"News post added!", "data"=>$news], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id){
    $news = News::findOrFail($id);
    return response()->json(["success"=>true, "message"=>"News post fetched", "data"=>$news], 200);
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
