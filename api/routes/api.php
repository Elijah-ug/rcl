<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::controller(AdminController::class)->group(function(){
    Route::post("/rcl/admins/registration", "store");
    Route::post("/rcl/admins/login", "login");
    Route::get("/rcl/admins", "index");
    Route::get("/rcl/admins/{admin}", "show")->middleware("auth:admin");
    Route::put("/rcl/admins/{admin}", "update")->middleware("auth:admin");
    Route::delete("/rcl/admins/{admin}", "destroy")->middleware("auth:admin");
});
