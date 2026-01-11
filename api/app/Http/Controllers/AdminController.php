<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAdminRequest;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\Admin;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller{
    use SoftDeletes;
    protected $dates = ["deleted_at"];
    public function index(){
        $admins = Admin::all();
        return response()->json(["message"=>"Admins fetched", "data"=>$admins], 200);
    }

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

    public function show() {
        $admin = auth("admin")->user();
        return response()->json(["message"=>"Admin fetched", "data"=>$admin]);
    }

    public function update(UpdateAdminRequest $request, Admin $admin){
        //validate data
        $data = $request->validated();
        // only updates provided fields
        $admin->update($data);
        return response()->json([
            "message"=>"Updated admin",
            "data"=>$admin
        ], 200);
    }

    public function destroy(Admin $admin) {
        $currentAdmin = auth("admin")->user();
        if($currentAdmin->getKey() !== $admin->getKey()){
            return response()->json(["message"=>"Unauthorized"], 403);
        }
        $admin->delete();
        return response()->json(["message"=>"admin deleted!", "data"=>$admin], 200);
    }
}
