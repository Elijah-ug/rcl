<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\MatchController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

// admin routes
Route::controller(AdminController::class)->group(function(){
    Route::post("/rcl/admins/registration", "store");
    Route::post("/rcl/admins/login", "login");
    Route::get("/rcl/admins", "index");
    Route::get("/rcl/admins/me", "show")->middleware("auth:admin");
    Route::put("/rcl/admins/{admin}", "update")->middleware("auth:admin");
    Route::delete("/rcl/admins/{admin}", "destroy")->middleware("auth:admin");
});

// team routes
Route::controller(TeamController::class)->group(function(){
    Route::post("/rcl/teams/registration", "store")->middleware("auth:admin");
    Route::get("/rcl/teams", "index");
    Route::get("/rcl/teams/unfixed/{matchday}", "unfixed");
    Route::get("/rcl/teams/{team}", "show");
    Route::put("/rcl/teams/{team}", "update")->middleware("auth:admin");
    Route::delete("/rcl/teams/{team}", "destroy")->middleware("auth:admin");
});

// match routes
Route::controller(MatchController::class)->group(function(){
    Route::post("/rcl/matches/registration", "store")->middleware("auth:admin");
    Route::get("/rcl/matches", "index");
    Route::get("/rcl/matches/{event}", "show");
    Route::put("/rcl/matches/{event}", "update")->middleware("auth:admin");
    Route::delete("/rcl/matches/{event}", "destroy")->middleware("auth:admin");
});

// results routes
Route::controller(ResultController::class)->group(function(){
     Route::post("/rcl/results/registration", "store")->middleware("auth:admin");
    Route::get("/rcl/results", "index");
    Route::get("/rcl/results/{result}", "show");
    Route::put("/rcl/results/update/{result}", "update")->middleware("auth:admin");
    Route::delete("/rcl/results/{result}", "destroy")->middleware("auth:admin");
});

// player routes
Route::controller(PlayerController::class)->group(function(){
     Route::post("/rcl/players/registration", "store")->middleware("auth:admin");
    Route::get("/rcl/players", "index");
    Route::get("/rcl/players/{player}", "show");
    Route::put("/rcl/players/update/{player}", "update")->middleware("auth:admin");
    Route::delete("/rcl/players/{player}", "destroy")->middleware("auth:admin");
});

// news routes
Route::controller( NewsController::class)->group(function(){
     Route::post("/rcl/news/registration", "store")->middleware("auth:admin");
    Route::get("/rcl/news", "index");
    Route::get("/rcl/news/{news}", "show");
    Route::put("/rcl/news/update/{news}", "update")->middleware("auth:admin");
    Route::delete("/rcl/news/{news}", "destroy")->middleware("auth:admin");
});

// table routes
Route::controller( TableController::class)->group(function(){
     Route::post("/rcl/table/publish", "store")->middleware("auth:admin");
    Route::get("/rcl/table", "index");
    Route::get("/rcl/table/{table}", "show");
    Route::put("/rcl/table/update/{table}", "update")->middleware("auth:admin");
    Route::post("/rcl/table/reset", "reset")->middleware("auth:admin");
});

