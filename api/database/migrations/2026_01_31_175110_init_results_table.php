<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void{
        Schema::create("results", function(Blueprint $table){
            $table->id();
            $table->foreignId("host_team_id")->constrained("teams")->onDelete("cascade");
            $table->foreignId("visitor_team_id")->constrained("teams")->onDelete("cascade");
            $table->integer("host_score")->default(0);
            $table->integer("visitor_score")->default(0);
            $table->timestamps();
            $table->string("stage")->default("upcoming");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void{
         Schema::dropIfExists("results");
    }
};
