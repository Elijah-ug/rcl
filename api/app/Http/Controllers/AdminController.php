<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAdminRequest;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
    //    issue a signup token
       $token = $admin->createToken("admin-token")->plainTextToken;
       return response()->json([
        "message"=>"Admin created",
        "token"=>$token,
        "token_type"=>"Bearer",
         "data"=>$admin
    ], 201);
    }

    public function login(LoginAdminRequest $request){
        $data = $request->validated();
        $admin = Admin::where("email", $data["email"])->first();
        // check for admin existence and password match
        
        if(!$admin || !Hash::check($data["password"], $admin->password)){
            return response()->json(["message"=>"Invalid credentials"], 401);
        }
        // delete old tokens
        $admin->tokens()->delete();
        $token = $admin->createToken("admin-token")->plainTextToken;
        return response()->json([
            "message"=>"Logged in as admin",    
            "token"=>$token,
            "token_type"=>"Bearer",
            "data"=>$admin
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(Admin $admin) {
        // $admin = Admin::where("id", $id);
        $currentAdmin = auth("admin")->user();
        if($currentAdmin->getKey() !== $admin->getKey()){
            return response()->json(["message"=>"Unauthorized"], 403);
        }
        return response()->json(["message"=>"Admin fetched", "data"=>$admin]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminRequest $request, Admin $admin){
        //validate data
        $data = $request->validated();
        // only updates provided fields
        $admin->update($data);
        return response()->json([
            "message"=>"Updated admin",
            "data"=>$data
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin) {
        $admin->delete();
        return response()->json(["message"=>"admin deleted!"]);
    }
}
