<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::controller(AdminController::class)->group(function(){
    Route::post("/rcl/admins/registration", "store");
    Route::get("/rcl/admins", "index");
    Route::get("/rcl/admins/{admin}", "show");
    Route::put("/rcl/admins/{admin}", "update");
    Route::delete("/rcl/admins/{admin}", "destroy");
});
