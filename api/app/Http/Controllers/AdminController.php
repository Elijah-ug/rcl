<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller{
    /**
     * Display a listing of the resource.
     */
    public function index(){
        $admins = Admin::all();
        return response()->json(["message"=>"Admins fetched", "data"=>$admins], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request) {
        // add admin
       $admin =  Admin::create($request->validated());
       return response()->json(["message"=>"Admin created", "data"=>$admin], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        // get admin by id
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id){
        //update admin by id
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin) {
        $admin->delete();
        return response()->json(["message"=>"admin deleted!"]);
    }
}
